import { FieldValues } from 'react-hook-form';
import { FormFieldBase } from './types';
export declare const TIME_FIELD_FORMAT = "HH:mm";
type Props<T extends FieldValues> = FormFieldBase<T> & {
    timezone?: string;
};
export declare const TimeField: <T extends FieldValues>({ name, label, rules, size, disabled, readonly, timezone, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
