import { FieldValues, useController } from 'react-hook-form';
import { InputAdornment, TextField } from '@mui/material';
import { combineValidation, getErrorMessage, getRequiredLabel } from './helper';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { FormFieldBase } from './types';
import { useError } from './ErrorProvider';
import { isNumber } from 'lodash';
import { useTranslation } from 'react-i18next';

const FORMAT_OPTIONS = { maximumFractionDigits: 20, useGrouping: false };
const formatToString = (value: string) => {
  return String(value) === '' || value === null || value === undefined
    ? ''
    : Number(value).toLocaleString('de-DE', FORMAT_OPTIONS);
};

type Props<T extends FieldValues> = FormFieldBase<T> & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const NumberInputField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  startAdornment,
  endAdornment,
  disabled,
  readonly,
}: Props<T>) => {
  const { t } = useTranslation();
  const {
    field,
    fieldState: { error },
  } = useController<T>({
    name,
    rules: combineValidation(rules, {
      invalidNumber: (value: string | number) => {
        return value === null || value === undefined || String(value) === '' || isNumber(value);
      },
    }),
  });
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, name, error, rules);

  /*
   * We need to differentiate between the value as string and the numeric value.
   * The string version is what is shown inside the input field,
   * the numeric value is what we validate and use internally as the "real" value.
   * Using the numeric value for the input as well would have strange side effects,
   * like being unable to insert a period while trying to write a decimal value
   * because the string "17." would be parsed to the number 17 (without period) automatically.
   */
  const [inputValue, setInputValue] = useState<string>(() => formatToString(field.value));

  useEffect(() => {
    if (!Number.isNaN(Number(field.value))) {
      setInputValue(formatToString(field.value));
    }
  }, [field.value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (/^\d*(,\d+)?$/.test(String(value))) {
      const unformattedValue = parseFloat(value.replace(',', '.'));
      field.onChange(isNaN(unformattedValue) ? value : unformattedValue);
    } else {
      field.onChange(value);
    }
    setInputValue(value);
  };

  const inputProps = {
    startAdornment: startAdornment ? (
      <InputAdornment position="start">{startAdornment}</InputAdornment>
    ) : undefined,
    endAdornment: endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> : undefined,
    inputMode: 'decimal' as const, // Ensure proper keyboard on mobile devices
  };

  /*
   * Inputs of type="number" have potential usability issues:
   * - Allowing certain non-numeric characters ('e', '+', '-', '.') and silently discarding others
   * - The functionality of scrolling to increment/decrement the number can cause accidental and hard-to-notice changes
   *
   * https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
   *
   * Therefore we use type="text" and inputMode="decimal" instead.
   */
  return (
    <TextField
      {...field}
      value={inputValue}
      onChange={handleChange}
      type="text"
      label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
      fullWidth
      size={size}
      error={!!errorMessage}
      helperText={errorMessage}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
      InputProps={inputProps}
    />
  );
};
