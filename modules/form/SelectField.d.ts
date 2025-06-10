import { FieldValues } from 'react-hook-form';
import { FormFieldBase, InputFieldOptions } from './types';
import { ReactNode } from '../../../node_modules/react';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    options: InputFieldOptions<T>;
    multiple?: boolean;
    startAdornment?: ReactNode;
};
export declare const SelectField: <T extends FieldValues>({ name, label, rules, size, options, multiple, startAdornment, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
