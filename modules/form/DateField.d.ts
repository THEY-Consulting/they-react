import { FieldValues } from 'react-hook-form';
import { FormFieldBase } from './types';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    timezone?: string;
};
export declare const DateField: <T extends FieldValues>({ name, label, rules, size, disabled, readonly, timezone, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
