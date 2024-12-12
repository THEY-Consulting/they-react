import { FieldValues, useController } from 'react-hook-form';
import { TextField } from '@mui/material';
import { getErrorMessage, getRemainingCharacters, getRequiredLabel } from './helper';
import { FormFieldBase } from './types';
import { useError } from './ErrorProvider';
import { useFieldFocus } from './hooks';
import { useMemo } from 'react';
import { RemainingCharacters } from './RemainingCharacters';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  rows?: number;
  maxRows?: number;
  minRows?: number;
};

export const MultilineInputField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  rows,
  minRows,
  maxRows,
  disabled,
  readonly,
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, rules });
  const { t } = useTranslation();
  const { focus, focusCallbacks } = useFieldFocus(field.onBlur);
  const remaining = getRemainingCharacters(rules, field.value);
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, name, error, rules);

  const inputProps = useMemo(
    () =>
      remaining !== undefined && focus
        ? {
            endAdornment: <RemainingCharacters remaining={remaining} />,
          }
        : undefined,
    [remaining, focus]
  );

  return (
    <TextField
      {...field}
      {...focusCallbacks}
      type="text"
      label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
      fullWidth
      error={!!errorMessage}
      helperText={errorMessage}
      multiline
      size={size}
      rows={rows}
      minRows={minRows || 3}
      maxRows={maxRows || 8}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
      InputProps={inputProps}
    />
  );
};
