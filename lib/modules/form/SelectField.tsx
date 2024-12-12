import { FieldValues, useController } from 'react-hook-form';
import { FormFieldBase, InputFieldOptions } from './types';
import { getErrorMessage, getRequiredLabel, isOptionGroup } from './helper';
import { FormControl, FormHelperText, InputLabel, ListSubheader, MenuItem, Select } from '@mui/material';
import { ReactNode } from 'react';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  options: InputFieldOptions<T>;
  startAdornment?: ReactNode;
};

export const SelectField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  options,
  startAdornment,
  disabled,
  readonly,
}: Props<T>) => {
  const { t } = useTranslation();
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, rules });
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, name, error, rules);

  return (
    <FormControl
      fullWidth
      error={!!errorMessage}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
    >
      {label && (
        <InputLabel id={`${name}-label`} shrink>
          {getRequiredLabel(label, !!rules?.required, disabled || readonly)}
        </InputLabel>
      )}
      <Select
        {...field}
        id={name}
        labelId={label ? `${name}-label` : undefined}
        notched
        label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
        size={size}
        startAdornment={startAdornment}
      >
        {options.map((option) =>
          isOptionGroup(option) ? (
            <ListSubheader key={option.group}>{option.group}</ListSubheader>
          ) : (
            <MenuItem key={option.value} value={option.value}>
              {option.label || option.value}
            </MenuItem>
          )
        )}
      </Select>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
