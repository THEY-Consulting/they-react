import { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { ValidationError } from './types';

type ErrorContextType = {
  errors: ValidationError[];
  setErrors: (errors: ValidationError[]) => void;
};

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const value = useMemo(() => ({ errors, setErrors }), [errors, setErrors]);

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};
