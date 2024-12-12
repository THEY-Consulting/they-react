import { useCallback } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { combineValidation, getErrorMessage, getRequiredLabel } from './helper';
import { DatePicker } from '@mui/x-date-pickers';
import { formatISO, isValid } from 'date-fns';
import { FormFieldBase } from './types';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  timezone?: string;
};

export const DateField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  disabled,
  readonly,
  timezone,
}: Props<T>) => {
  const { t } = useTranslation();
  const {
    field,
    fieldState: { error },
  } = useController<T>({
    name,
    rules: combineValidation(rules, {
      invalidDate: (value: string) => {
        if (!value) {
          return true;
        }
        const date = new Date(value);
        return isValid(date);
      },
    }),
  });
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, name, error, rules);

  const { onChange } = field;
  const handleChange = useCallback(
    (value: Date | null) => {
      if (!value) {
        onChange(null);
      } else if (isValid(value)) {
        onChange(formatISO(value));
      } else {
        onChange(value.toString());
      }
    },
    [onChange]
  );

  return (
    <DatePicker
      {...field}
      value={field.value ? new Date(field.value) : null}
      onChange={handleChange}
      label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
      timezone={timezone}
      slotProps={{
        textField: {
          error: !!errorMessage,
          helperText: errorMessage,
          fullWidth: true,
          size,
        },
        actionBar: ({ wrapperVariant }) => ({
          actions: wrapperVariant === 'desktop' ? ['clear'] : ['clear', 'cancel', 'accept'],
        }),
      }}
    />
  );
};
