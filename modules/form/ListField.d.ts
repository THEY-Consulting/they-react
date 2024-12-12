import { DynamicFormField, FormFieldBase } from './types';
import { FieldPath, FieldValues } from 'react-hook-form';
import { ReactNode } from '../../../node_modules/react';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    fields: DynamicFormField<T>[];
    newEntry: T[FieldPath<T>];
    getLabel?: (index: number, name: string) => ReactNode;
    marginBottom?: number;
};
export declare const ListField: <T extends FieldValues>({ name, label, rules, size, fields, newEntry, disabled, readonly, getLabel, marginBottom, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
