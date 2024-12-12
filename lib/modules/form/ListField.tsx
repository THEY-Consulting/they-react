import { DynamicFormField, FormFieldBase } from './types';
import { FieldPath, FieldValues, Path, useController, useFieldArray } from 'react-hook-form';
import { RenderInputField } from './RenderInputField';
import { Button, FormControl, FormHelperText, Grid, IconButton } from '@mui/material';
import { getErrorMessage } from './helper';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fragment, ReactNode, useCallback, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import { DividerLabel } from './DividerLabel';
import { useError } from './ErrorProvider';
import { useTranslation } from 'react-i18next';

type Props<T extends FieldValues> = FormFieldBase<T> & {
  fields: DynamicFormField<T>[];
  newEntry: T[FieldPath<T>];
  getLabel?: (index: number, name: string) => ReactNode;
  marginBottom?: number;
};

export const ListField = <T extends FieldValues>({
  name,
  label,
  rules,
  size,
  fields,
  newEntry,
  disabled,
  readonly,
  getLabel,
  marginBottom,
}: Props<T>) => {
  const { t } = useTranslation();
  const {
    fieldState: { error },
  } = useController<T>({ name, rules });
  const {
    fields: items,
    append,
    replace,
    remove,
  } = useFieldArray({
    name,
  });
  const { errors } = useError();
  const errorMessage = getErrorMessage(t, errors, name, error?.root, rules);

  const addEntry = useCallback(() => {
    append(cloneDeep(newEntry));
  }, [newEntry, append]);

  const removeEntry = useCallback(
    (index: number) => {
      if (!rules?.required || items.length > 1) {
        remove(index);
      } else {
        replace([cloneDeep(newEntry)]);
      }
    },
    [remove, replace, rules?.required, items.length, newEntry]
  );

  useEffect(() => {
    if (rules?.required && !items.length) {
      replace([cloneDeep(newEntry)]);
    }
  }, [replace, rules?.required, items.length, newEntry]);

  return (
    <FormControl fullWidth error={!!errorMessage}>
      <Grid direction="row" container spacing={2}>
        {items.map((item, index: number) => (
          <Fragment key={item.id}>
            <Grid item xs alignSelf="center">
              <DividerLabel label={getLabel ? getLabel(index, name) : label} />
            </Grid>
            <Grid item alignSelf="center">
              {!readonly && (
                <IconButton size="small" onClick={() => removeEntry(index)} disabled={disabled}>
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              )}
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: index < items.length - 1 ? marginBottom : 0 }}>
              <Grid direction="row" container spacing={2}>
                {fields
                  .filter((field) => !field.hidden)
                  .map((field) => {
                    const { xs, sm, md, lg, xl, align } = field;
                    // would be nice if we could replace `*` here
                    const indexedName = field.name.replace('.0.', `.${index}.`) as Path<T>;
                    return (
                      <Grid
                        item
                        xs={xs ?? 12}
                        sm={sm}
                        md={md}
                        lg={lg}
                        xl={xl}
                        alignSelf={align}
                        key={field.name}
                      >
                        <RenderInputField
                          {...field}
                          size={field.size ?? size}
                          name={indexedName}
                          type={field.type}
                          disabled={field.disabled ?? disabled}
                          readonly={field.readonly ?? readonly}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          </Fragment>
        ))}

        {!!newEntry && !readonly && (
          <Grid item xs alignSelf="center">
            <Button onClick={addEntry} disabled={disabled} sx={{ width: '100%', backgroundColor: '#f3f3f3' }}>
              <AddIcon fontSize="inherit" />
            </Button>
          </Grid>
        )}
      </Grid>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
