import { FieldPath, FieldValues } from 'react-hook-form';
import { DynamicFormField, FormFieldBase, InputFieldOption } from './types';
import { ReactNode } from '../../../node_modules/react';
import { AutocompleteOwnerState, AutocompleteRenderOptionState, FilterOptionsState } from '@mui/material';
type BaseFieldProps<T extends FieldValues> = FormFieldBase<T>;
type Props<T extends FieldValues> = (BaseFieldProps<T> & {
    type: 'boolean' | 'currency' | 'url';
}) | (BaseFieldProps<T> & {
    type: 'date' | 'time';
    timezone?: string;
}) | (BaseFieldProps<T> & {
    type: 'string';
    clearable?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}) | (BaseFieldProps<T> & {
    type: 'number';
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}) | (BaseFieldProps<T> & {
    type: 'password';
}) | (BaseFieldProps<T> & {
    type: 'select';
    options?: InputFieldOption<T[FieldPath<T>]>[];
    autocomplete?: boolean;
    multiple?: boolean;
    fitContent?: boolean;
    filterOptions?: (options: T[FieldPath<T>][], state: FilterOptionsState<T[FieldPath<T>]>) => T[FieldPath<T>][];
    renderOption?: (props: React.HTMLAttributes<HTMLLIElement> & {
        key?: string;
    }, option: T[FieldPath<T>], state: AutocompleteRenderOptionState, ownerState: AutocompleteOwnerState<T[FieldPath<T>], false, false, false>) => ReactNode;
    startAdornment?: ReactNode;
}) | (BaseFieldProps<T> & {
    type: 'chipselect';
    options?: InputFieldOption<T[FieldPath<T>]>[];
    startAdornment?: ReactNode;
}) | (BaseFieldProps<T> & {
    type: 'buttonselect';
    options?: InputFieldOption<T[FieldPath<T>]>[];
    spacing?: number;
}) | (BaseFieldProps<T> & {
    type: 'multiline';
    minRows?: number;
    maxRows?: number;
}) | (FormFieldBase<T> & {
    type: 'button';
    startIcon?: ReactNode;
}) | (FormFieldBase<T> & {
    type: 'divider';
}) | (BaseFieldProps<T> & {
    type: 'list';
    fields?: DynamicFormField<T>[];
    newEntry?: T[FieldPath<T>];
    getLabel?: (index: number, name: string) => ReactNode;
    marginBottom?: number;
});
export declare const RenderInputField: <T extends FieldValues>(props: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
