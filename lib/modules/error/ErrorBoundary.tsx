import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorDisplay } from './ErrorDisplay';

type Props = {
  children?: React.ReactNode;
};

export const ErrorBoundary: React.FC<Props> = ({ children }) => {
  return <ReactErrorBoundary FallbackComponent={ErrorDisplay}>{children}</ReactErrorBoundary>;
};
