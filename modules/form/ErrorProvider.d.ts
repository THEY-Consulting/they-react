import { ReactNode } from '../../../node_modules/react';
import { ValidationError } from './types';
type ErrorContextType = {
    errors: ValidationError[];
    setErrors: (errors: ValidationError[]) => void;
};
export declare const useError: () => ErrorContextType;
export declare const ErrorProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export {};
