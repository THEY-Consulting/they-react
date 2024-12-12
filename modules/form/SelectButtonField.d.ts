import { FieldValues } from 'react-hook-form';
import { FormFieldBase, InputFieldOptions } from './types';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    options: InputFieldOptions<T>;
    spacing?: number;
};
export declare const SelectButtonField: <T extends FieldValues>({ name, label, rules, size, spacing, options, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
