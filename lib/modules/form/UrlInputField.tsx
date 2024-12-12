import { FieldValues, useWatch } from 'react-hook-form';
import { FormFieldBase } from './types';
import { StringInputField } from './StringInputField';
import PublicIcon from '@mui/icons-material/Public';
import { IconButton } from '@mui/material';

type Props<T extends FieldValues> = FormFieldBase<T>;

export const UrlInputField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  disabled,
  readonly,
}: Props<T>) => {
  const url = useWatch({ name });

  return (
    <StringInputField
      name={name}
      label={label}
      rules={rules}
      size={size}
      endAdornment={
        <IconButton href={url} target="_blank" disabled={!url}>
          <PublicIcon />
        </IconButton>
      }
      disabled={disabled}
      readonly={readonly}
    />
  );
};
