import { FieldValues, useController } from 'react-hook-form';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';
import { getErrorMessage, getRequiredLabel } from './helper';
import { FormFieldBase } from './types';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T>;

export const CheckboxField = <T extends FieldValues>({
  name,
  label,
  rules,
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
      error={!!errorMessage}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
    >
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...field} checked={field.value} />}
          label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
        />
      </FormGroup>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
