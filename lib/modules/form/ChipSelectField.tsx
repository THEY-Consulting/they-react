import {
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { FieldValues, useController } from 'react-hook-form';
import { FormFieldBase, InputFieldOptions } from './types';
import { getErrorMessage, getOptionLabel, getRequiredLabel, isOptionGroup, toArrayValue } from './helper';
import CancelIcon from '@mui/icons-material/Cancel';
import { ReactNode } from 'react';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  options: InputFieldOptions<T>;
  startAdornment?: ReactNode;
};

export const ChipSelectField = <T extends FieldValues>({
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

  const handleChange = (event: SelectChangeEvent<string[] | string>) => {
    const { value } = event.target;
    field.onChange(
      // On autofill, we get a stringified value.
      toArrayValue(value)
    );
  };

  const handleDelete = (value: string) => {
    field.onChange(field.value.filter((v: string) => v !== value));
  };

  return (
    <FormControl
      fullWidth
      error={!!errorMessage}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
    >
      {label && (
        <InputLabel id={`${name}-label`} shrink required={!!rules?.required}>
          {getRequiredLabel(label, !!rules?.required, disabled || readonly)}
        </InputLabel>
      )}
      <Select
        {...field}
        value={toArrayValue(field.value)}
        onChange={handleChange}
        id={name}
        labelId={label ? `${name}-label` : undefined}
        label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
        multiple
        notched
        size={size}
        startAdornment={startAdornment}
        renderValue={(selected: string[]) => (
          <Stack direction="row" flexWrap="wrap" gap={0.5}>
            {selected.map((value) => (
              <Chip
                deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                key={value}
                label={getOptionLabel(options, value)}
                onDelete={disabled || readonly ? undefined : () => handleDelete(value)}
              />
            ))}
          </Stack>
        )}
      >
        {options.map((option) =>
          isOptionGroup(option) ? (
            <ListSubheader key={option.group}>{option.group}</ListSubheader>
          ) : (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={field.value.indexOf(option.value) > -1} />
              <ListItemText primary={option.label || option.value} />
            </MenuItem>
          )
        )}
      </Select>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
