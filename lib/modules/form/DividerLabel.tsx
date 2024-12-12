import { Divider, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  label?: ReactNode;
};

export const DividerLabel: React.FC<Props> = ({ label }) => {
  return (
    <Divider textAlign="left" sx={{ marginTop: 1, marginBottom: 1 }}>
      {label && (
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      )}
    </Divider>
  );
};
