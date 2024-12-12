import { FieldValues } from 'react-hook-form';
import { FormFieldBase } from './types';
import { ReactNode } from '../../../node_modules/react';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    startIcon?: ReactNode;
};
export declare const ButtonField: <T extends FieldValues>({ name, label, rules, size, disabled, readonly, startIcon, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
