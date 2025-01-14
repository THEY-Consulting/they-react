import { Accordion, AccordionDetails, AccordionSummary, Button, FormLabel, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { FieldValues } from 'react-hook-form';
import { FormGroup } from './types';
import { DefaultGroup } from './DefaultGroup';

export type AccordionGroupProps<T extends FieldValues> = {
  group: FormGroup<T>;
  disabled?: boolean;
  readonly?: boolean;
};

export const AccordionGroup = <T extends FieldValues>({
  group,
  disabled,
  readonly,
}: AccordionGroupProps<T>) => {
  return (
    <Accordion
      disableGutters
      sx={{
        marginLeft: -2, // offset paper padding
        marginRight: -2,
        boxShadow: 'none',
        '&.MuiAccordion-root:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ width: '100%', textAlign: 'inherit', color: 'inherit' }}
        component={Button}
      >
        <FormLabel>
          <Typography variant="overline">{group.label}</Typography>
        </FormLabel>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 1, paddingBottom: 0 }}>
        <DefaultGroup group={group} disabled={disabled} readonly={readonly} excludeLabel={true} />
      </AccordionDetails>
    </Accordion>
  );
};
