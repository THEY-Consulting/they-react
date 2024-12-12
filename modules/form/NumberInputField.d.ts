import { FieldValues } from 'react-hook-form';
import { ReactNode } from '../../../node_modules/react';
import { FormFieldBase } from './types';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
};
export declare const NumberInputField: <T extends FieldValues>({ name, label, rules, size, startAdornment, endAdornment, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
