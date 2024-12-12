import { FieldValues, useController } from 'react-hook-form';
import { FormFieldBase, InputFieldOptions } from './types';
import { getErrorMessage, getRequiredLabel, isOptionGroup } from './helper';
import { Alert, Button, FormHelperText, InputLabel, Stack } from '@mui/material';
import { useMemo } from 'react';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  options: InputFieldOptions<T>;
  spacing?: number;
};

export const SelectButtonField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  spacing,
  options,
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

  const [sxActive, sxInactive] = useMemo(() => {
    const padding =
      size === 'small'
        ? {
            paddingLeft: 1.5,
            paddingRight: 1.5,
            paddingTop: 0.5,
            paddingBottom: 0.5,
          }
        : {};
    return [
      { ...padding, opacity: 1 },
      { ...padding, opacity: 0.5 },
    ];
  }, [size]);

  return (
    <>
      {label && (
        <InputLabel id={`${name}-label`}>
          {getRequiredLabel(label, !!rules?.required, disabled || readonly)}
        </InputLabel>
      )}
      <Stack direction="row" alignItems="center" spacing={spacing ?? 2} flexWrap="wrap">
        {options.map((option) =>
          isOptionGroup(option) ? null : (
            <Button
              key={option.value}
              onClick={() => field.onChange(option.value)}
              sx={{ padding: 0 }}
              disabled={disabled || readonly}
            >
              <Alert
                severity={option.color ?? 'info'}
                icon={option.icon}
                sx={option.value === field.value ? sxActive : sxInactive}
              >
                {option.label ?? option.value}
              </Alert>
            </Button>
          )
        )}
      </Stack>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </>
  );
};
