import { FieldValues, useController } from 'react-hook-form';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { getErrorMessage, getRemainingCharacters, getRequiredLabel } from './helper';
import { ReactNode, useMemo } from 'react';
import { FormFieldBase } from './types';
import { useError } from './ErrorProvider';
import { useFieldFocus } from './hooks';
import { RemainingCharacters } from './RemainingCharacters';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  clearable?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const StringInputField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  clearable,
  startAdornment,
  endAdornment,
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
  const errorMessage = getErrorMessage(t, errors, field.name, error, rules);

  const { value, onChange } = field;
  const inputProps = useMemo(() => {
    const props: {
      startAdornment?: ReactNode;
      endAdornment?: ReactNode;
    } = {};
    if (startAdornment) {
      props.startAdornment = <InputAdornment position="start">{startAdornment}</InputAdornment>;
    }

    if (endAdornment) {
      props.endAdornment = <InputAdornment position="end">{endAdornment}</InputAdornment>;
    } else if (clearable) {
      props.endAdornment = (
        <IconButton sx={{ visibility: value ? 'visible' : 'hidden' }} onClick={() => onChange('')}>
          <ClearIcon fontSize="small" />
        </IconButton>
      );
    } else if (remaining !== undefined && focus) {
      props.endAdornment = <RemainingCharacters remaining={remaining} />;
    }

    return props;
  }, [startAdornment, endAdornment, clearable, value, onChange, remaining, focus]);

  return (
    <TextField
      {...field}
      {...focusCallbacks}
      type="text"
      label={getRequiredLabel(label, !!rules?.required, disabled || readonly)}
      size={size}
      fullWidth
      error={!!errorMessage}
      helperText={errorMessage}
      disabled={disabled || readonly}
      className={readonly ? 'readonly' : undefined}
      InputProps={inputProps}
    />
  );
};
