import { Accordion, AccordionDetails, AccordionSummary, Button, FormLabel, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { FieldValues, useFormState } from 'react-hook-form';
import { FormGroup } from './types';
import { DefaultGroup } from './DefaultGroup';
import { useState, useCallback, useEffect } from 'react';
import { useError } from './ErrorProvider';

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
  const { errors: backendErrors } = useError();
  const { errors: frontendErrors } = useFormState<T>();
  const [isExpanded, setIsExpanded] = useState(Boolean(group.expanded));

  const fieldNames = group.fields.map((field) => field.name);
  const hasFrontendErrors = Object.keys(frontendErrors).some((key) =>
    fieldNames.some((name) => name.includes(key))
  );

  const hasBackendErrors = backendErrors.some((error) => fieldNames.some((name) => name === error.path));

  const hasErrors = hasBackendErrors || hasFrontendErrors;
  const toggleIsOpen = useCallback(() => {
    setIsExpanded((wasExpanded) => !wasExpanded || hasErrors);
  }, [hasErrors]);

  useEffect(() => {
    setIsExpanded((isExpanded) => isExpanded || hasErrors);
  }, [hasErrors]);

  return (
    <Accordion
      expanded={isExpanded}
      onChange={toggleIsOpen}
      disableGutters
      sx={{
        marginLeft: -2, // offset paper padding
        marginRight: -2,
        boxShadow: 'none',
        '&.MuiAccordion-root:before': {
          display: 'none',
        },
      }}
      defaultExpanded={group.expanded}
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
