import { FieldValues } from 'react-hook-form';
import { FormFieldBase } from './types';
type Props<T extends FieldValues> = FormFieldBase<T>;
export declare const CheckboxInput: <T extends FieldValues>({ name, label, rules, disabled, readonly, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
