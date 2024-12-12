import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  remaining?: number;
};

export const RemainingCharacters: React.FC<Props> = ({ remaining }) => {
  return (
    remaining !== undefined && (
      <Typography
        color={remaining < 0 ? 'error' : 'text.disabled'}
        pl={0.5}
        sx={{ position: 'absolute', top: 2, right: 6, fontSize: '0.75rem' }}
      >
        {Math.abs(remaining)}
      </Typography>
    )
  );
};
