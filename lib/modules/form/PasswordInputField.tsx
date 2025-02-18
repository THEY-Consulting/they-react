import { FieldValues, useController } from 'react-hook-form';
import { FormFieldBase } from './types';
import { useTranslation } from 'react-i18next';
import { getErrorMessage, getRequiredLabel } from './helper';
import { useError } from './ErrorProvider';
import { TextField } from '@mui/material';

type Props<T extends FieldValues> = FormFieldBase<T>;

export const PasswordInputField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  disabled,
  readonly,
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, rules });
  const { t } = useTranslation();
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, field.name, error, rules);

  return (
    <TextField
      {...field}
      type="password"
      label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
      size={size}
      fullWidth
      error={!!errorMessage}
      helperText={errorMessage}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
    />
  );
};
