import { FieldValues, useController } from 'react-hook-form';
import { FormFieldBase } from './types';
import { Button } from '@mui/material';
import { ReactNode } from 'react';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  startIcon?: ReactNode;
};

export const ButtonField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  disabled,
  readonly,
  startIcon,
}: Props<T>) => {
  const { field } = useController<T>({ name, rules });

  return (
    <Button
      onClick={() => field.onChange(true)}
      startIcon={startIcon}
      size={size}
      disabled={disabled || readonly}
    >
      {label}
    </Button>
  );
};
