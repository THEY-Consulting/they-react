import React from 'react';
import { format } from 'date-fns';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

type FormMetadataProps = {
  editedBy: string;
  editedAt: string;
};

export const FormMetadata: React.FC<FormMetadataProps> = ({ editedBy, editedAt }) => {
  const { t } = useTranslation();
  const date = format(new Date(editedAt), 'dd.MM.yyyy');
  const time = format(new Date(editedAt), 'HH:mm');

  return (
    <Typography variant="body2" color="text.disabled">
      {t('form.metadata', { date, time, user: editedBy })}
    </Typography>
  );
};
