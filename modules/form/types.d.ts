import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';
import { ReactNode } from '../../../node_modules/react';
import { AutocompleteOwnerState, AutocompleteRenderOptionState, FilterOptionsState, SxProps } from '@mui/material';
type InputFieldOptionItem<T> = {
    value: T;
    label?: string;
    color?: 'success' | 'info' | 'warning' | 'error';
    icon?: ReactNode;
};
export type InputFieldOptionGroup = {
    group: string;
};
export type InputFieldOption<T> = InputFieldOptionItem<T> | InputFieldOptionGroup;
export type InputFieldOptions<T extends FieldValues> = InputFieldOption<T[FieldPath<T>]>[];
export type FormFieldBase<T extends FieldValues> = {
    name: FieldPath<T>;
    label?: string;
    rules?: UseControllerProps<T>['rules'];
    size?: 'small' | 'medium';
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    hidden?: boolean;
    sx?: SxProps;
    xs?: number | 'auto' | true;
    sm?: number | 'auto' | true;
    md?: number | 'auto' | true;
    lg?: number | 'auto' | true;
    xl?: number | 'auto' | true;
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
};
export type DynamicFormField<T extends FieldValues> = (FormFieldBase<T> & {
    type: 'boolean';
    initial?: boolean;
}) | (FormFieldBase<T> & {
    type: 'date' | 'time';
    initial?: string;
    timezone?: string;
}) | (FormFieldBase<T> & {
    type: 'currency';
    initial?: number | string;
}) | (FormFieldBase<T> & {
    type: 'url';
    initial?: string;
}) | (FormFieldBase<T> & {
    type: 'string';
    clearable?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    initial?: string;
}) | (FormFieldBase<T> & {
    type: 'number';
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    initial?: number | string;
}) | (FormFieldBase<T> & {
    type: 'password';
}) | (FormFieldBase<T> & {
    type: 'select';
    options: InputFieldOptions<T>;
    autocomplete?: boolean;
    fitContent?: boolean;
    filterOptions?: (options: T[FieldPath<T>][], state: FilterOptionsState<T[FieldPath<T>]>) => T[FieldPath<T>][];
    renderOption?: (props: React.HTMLAttributes<HTMLLIElement> & {
        key?: string;
    }, option: T[FieldPath<T>], state: AutocompleteRenderOptionState, ownerState: AutocompleteOwnerState<T[FieldPath<T>], false, false, false>) => ReactNode;
    startAdornment?: ReactNode;
    initial?: number | string;
}) | (FormFieldBase<T> & {
    type: 'chipselect';
    options: InputFieldOptions<T>;
    startAdornment?: ReactNode;
    initial?: number | string;
}) | (FormFieldBase<T> & {
    type: 'buttonselect';
    options: InputFieldOptions<T>;
    spacing?: number;
    initial?: number | string;
}) | (FormFieldBase<T> & {
    type: 'multiline';
    rows?: number;
    maxRows?: number;
    minRows?: number;
    initial?: string;
}) | (FormFieldBase<T> & {
    type: 'button';
    startIcon?: ReactNode;
}) | (FormFieldBase<T> & {
    label?: string;
    type: 'divider';
}) | (FormFieldBase<T> & {
    type: 'list';
    fields: DynamicFormField<T>[];
    newEntry?: T[FieldPath<T>];
    getLabel?: (index: number, name: string) => ReactNode;
    marginBottom?: number;
});
export type FormGroup<T extends FieldValues> = {
    label?: string;
    fields: DynamicFormField<T>[];
    size?: 'small' | 'medium';
    spacing?: number;
    marginBottom?: number;
    required?: boolean;
    accordion?: boolean;
};
export type FormFields<T extends FieldValues> = FormGroup<T>[];
export type ValidationError = {
    path: string;
    field: string;
    message: string;
};
export type ErrorResponse = {
    code: string;
    message: string;
    details: ValidationError[] | string;
};
export {};
