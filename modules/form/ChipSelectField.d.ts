import { FieldValues } from 'react-hook-form';
import { FormFieldBase, InputFieldOptions } from './types';
import { ReactNode } from '../../../node_modules/react';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    options: InputFieldOptions<T>;
    startAdornment?: ReactNode;
};
export declare const ChipSelectField: <T extends FieldValues>({ name, label, rules, size, options, startAdornment, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
