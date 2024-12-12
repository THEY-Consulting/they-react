import { FieldValues } from 'react-hook-form';
import { NumberInputField } from './NumberInputField';
import { FormFieldBase } from './types';

type Props<T extends FieldValues> = FormFieldBase<T>;

export const CurrencyInputField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  disabled,
  readonly,
}: Props<T>) => {
  return (
    <NumberInputField
      name={name}
      label={label}
      rules={rules}
      size={size}
      endAdornment="€"
      disabled={disabled}
      readonly={readonly}
    />
  );
};
