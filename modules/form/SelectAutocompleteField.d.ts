import { AutocompleteOwnerState, AutocompleteRenderOptionState, FilterOptionsState } from '@mui/material';
import { FormFieldBase, InputFieldOptions } from './types';
import { FieldPath, FieldValues } from 'react-hook-form';
import { default as React, ReactNode } from '../../../node_modules/react';
type Props<T extends FieldValues> = FormFieldBase<T> & {
    options: InputFieldOptions<T>;
    startAdornment?: ReactNode;
    filterOptions?: (options: T[FieldPath<T>][], state: FilterOptionsState<T[FieldPath<T>]>) => T[FieldPath<T>][];
    renderOption?: (props: React.HTMLAttributes<HTMLLIElement> & {
        key?: string;
    }, option: T[FieldPath<T>], state: AutocompleteRenderOptionState, ownerState: AutocompleteOwnerState<T[FieldPath<T>], false, false, false>) => ReactNode;
    fitContent?: boolean;
};
/**
 * This generic component creates an autocomplete text field.
 * <T> is the type of the elements that can be selected.
 */
export declare const SelectAutocompleteField: <T extends FieldValues>({ name, label, rules, size, options, startAdornment, filterOptions, renderOption, disabled, readonly, fitContent, }: Props<T>) => React.ReactElement | null;
export {};
