import {
  Autocomplete,
  AutocompleteOwnerState,
  AutocompleteRenderOptionState,
  FilterOptionsState,
  InputAdornment,
  TextField,
} from '@mui/material';
import { FormFieldBase, InputFieldOptions } from './types';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
import React, { ReactNode, useCallback, useMemo } from 'react';
import { getErrorMessage, getRequiredLabel, isOptionGroup, notUndefined } from './helper';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  options: InputFieldOptions<T>;
  startAdornment?: ReactNode;
  filterOptions?: (
    options: T[FieldPath<T>][],
    state: FilterOptionsState<T[FieldPath<T>]>
  ) => T[FieldPath<T>][];
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement> & { key?: string },
    option: T[FieldPath<T>],
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<T[FieldPath<T>], false, false, false>
  ) => ReactNode;
  fitContent?: boolean;
};

/**
 * This generic component creates an autocomplete text field.
 * <T> is the type of the elements that can be selected.
 */
export const SelectAutocompleteField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  options,
  startAdornment,
  filterOptions,
  renderOption,
  disabled,
  readonly,
  fitContent,
}: Props<T>): React.ReactElement | null => {
  const { t } = useTranslation();
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, rules });
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, name, error, rules);

  const { onChange } = field;
  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: T[FieldPath<T>] | null) => {
      onChange(newValue ?? '');
    },
    [onChange]
  );

  const getOptionLabel = (value: T[FieldPath<T>]) => {
    const option = options.find((option) => !isOptionGroup(option) && option.value === value);
    return (option && !isOptionGroup(option) && (option.label ?? option.value)) || '';
  };

  const autocompleteOptions = useMemo(() => {
    return [
      ...new Set(
        options.map((option) => (!isOptionGroup(option) ? option.value : undefined)).filter(notUndefined)
      ),
    ];
  }, [options]);

  return (
    <Autocomplete
      {...field}
      value={field.value || null}
      onChange={handleChange}
      size={size}
      autoHighlight
      disablePortal
      id={name}
      options={autocompleteOptions}
      getOptionLabel={getOptionLabel}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
      filterOptions={filterOptions}
      renderOption={renderOption}
      renderInput={(params) => (
        <TextField
          {...params}
          label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
          slotProps={
            startAdornment
              ? {
                  input: {
                    ...params.InputProps, // shouldn't params provide slotProps instead?
                    startAdornment: (
                      <InputAdornment position="start" sx={{ marginLeft: 0.5, marginRight: 0 }}>
                        {startAdornment}
                      </InputAdornment>
                    ),
                  },
                }
              : undefined
          }
          error={!!errorMessage}
          helperText={errorMessage}
        />
      )}
      slotProps={
        fitContent
          ? {
              popper: { style: { width: 'fit-content' }, placement: 'bottom-start' },
            }
          : undefined
      }
    />
  );
};
