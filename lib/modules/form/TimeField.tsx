import { FieldValues, useController } from 'react-hook-form';
import { combineValidation, getErrorMessage, getRequiredLabel } from './helper';
import { TimePicker } from '@mui/x-date-pickers';
import { format, isValid, parseISO } from 'date-fns';
import { FormFieldBase } from './types';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

export const TIME_FIELD_FORMAT = 'HH:mm';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  timezone?: string;
};

export const TimeField = <T extends FieldValues>({
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
      invalidTime: (value: string) => {
        if (!value) {
          return true;
        }
        const time = parseISO(value);
        return isValid(time);
      },
    }),
  });
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, field.name, error, rules);

  const handleChange = (value: Date | null) => {
    if (!value) {
      field.onChange(null);
    } else if (isValid(value)) {
      const formattedTime = format(value, TIME_FIELD_FORMAT);
      const isoString = `1970-01-01T${formattedTime}:00+01:00`;
      field.onChange(isoString);
    } else {
      field.onChange(value.toString());
    }
  };

  return (
    <TimePicker
      {...field}
      defaultValue={parseISO('1970-01-01T00:00:00')}
      value={field.value ? parseISO(field.value) : null}
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
        actionBar: () => ({
          actions: ['clear', 'cancel', 'accept'],
        }),
      }}
    />
  );
};
