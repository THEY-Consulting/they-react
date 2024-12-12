import { FieldValues } from 'react-hook-form';
import { ReactNode } from '../../../node_modules/react';
import { FormFieldBase } from './types';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    clearable?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
};
export declare const StringInputField: <T extends FieldValues>({ name, label, rules, size, clearable, startAdornment, endAdornment, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
