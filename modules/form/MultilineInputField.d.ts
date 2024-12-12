import { FieldValues } from 'react-hook-form';
import { FormFieldBase } from './types';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    rows?: number;
    maxRows?: number;
    minRows?: number;
};
export declare const MultilineInputField: <T extends FieldValues>({ name, label, rules, size, rows, minRows, maxRows, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
