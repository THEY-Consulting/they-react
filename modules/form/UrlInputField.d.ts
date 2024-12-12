import { FieldValues } from 'react-hook-form';
import { FormFieldBase } from './types';
type Props<T extends FieldValues> = FormFieldBase<T>;
export declare const UrlInputField: <T extends FieldValues>({ name, label, rules, size, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
