import React from 'react';
import { Box, CircularProgress, Fade, LinearProgress, Stack } from '@mui/material';

type Props = {
  loading?: boolean;
  children?: React.ReactNode;
  variant?: 'circular' | 'linear';
  size?: number;
  skipTransitionDelay?: boolean;
};

export const Progress: React.FC<Props> = ({ loading, children, variant, size, skipTransitionDelay }) => {
  return loading ? (
    <Fade
      in
      style={{
        transitionDelay: skipTransitionDelay ? '0ms' : '800ms',
      }}
      timeout={{ enter: 1000, exit: 0 }}
      unmountOnExit
    >
      <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        {variant === 'linear' ? (
          <Box width="71%" maxWidth={600}>
            <LinearProgress />
          </Box>
        ) : (
          <CircularProgress size={size} />
        )}
      </Stack>
    </Fade>
  ) : (
    children
  );
};
