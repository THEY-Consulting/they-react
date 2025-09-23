import { FormLabel, SxProps, Theme, Typography } from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { RenderInputField } from './RenderInputField';
import { FormGroup } from './types';

export type DefaultGroupProps<T extends FieldValues> = {
  group: FormGroup<T>;
  disabled?: boolean;
  readonly?: boolean;
  excludeLabel?: boolean;
  sx?: SxProps<Theme>;
};

export const DefaultGroup = <T extends FieldValues>({
  group,
  disabled,
  readonly,
  excludeLabel,
  sx,
}: DefaultGroupProps<T>) => {
  return (
    <Grid
      direction="row"
      container
      spacing={group.spacing ?? 2}
      marginBottom={group.marginBottom ?? 5}
      sx={sx}
    >
      {group.label && excludeLabel !== true && (
        <Grid item xs={12}>
          <FormLabel>
            <Typography variant="overline">{group.label}</Typography>
          </FormLabel>
        </Grid>
      )}
      {group.fields
        .filter((field) => !field.hidden)
        .map((field) => {
          const { sx, xs, sm, md, lg, xl, align } = field;
          return (
            <Grid
              item
              sx={sx}
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
                size={field.size ?? group.size}
                type={field.type}
                disabled={field.disabled ?? disabled}
                readonly={field.readonly ?? readonly}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
