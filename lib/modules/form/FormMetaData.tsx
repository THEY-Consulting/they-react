import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDateString, formatTimeString } from '../table/formatters';
import { TFunction } from 'i18next';

const getFormatted = (type: 'created' | 'edited', date: string, user: string, t: TFunction) => {
  const formattedDate = formatDateString(date, t);
  const formattedTime = formatTimeString(date, t);

  return t(`form.metadata.${type}`, { date: formattedDate, time: formattedTime, user });
};

type FormMetadataProps = {
  createdAt?: string;
  createdBy?: string;
  editedBy?: string;
  editedAt?: string;
};

export const FormMetadata: React.FC<FormMetadataProps> = ({ createdBy, createdAt, editedBy, editedAt }) => {
  const { t } = useTranslation();

  if (editedAt && editedBy) {
    return (
      <Typography variant="body2" color="text.disabled">
        {getFormatted('edited', editedAt, editedBy, t)}
      </Typography>
    );
  }

  if (createdAt && createdBy) {
    return (
      <Typography variant="body2" color="text.disabled">
        {getFormatted('created', createdAt, createdBy, t)}
      </Typography>
    );
  }

  return null;
};
