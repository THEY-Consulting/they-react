import React from 'react';

type Props = {
  error: Error;
};

export const ErrorDisplay: React.FC<Props> = ({ error }) => {
  return (
    <div role="alert">
      <pre style={{ color: 'red' }}>{error.stack}</pre>
    </div>
  );
};
