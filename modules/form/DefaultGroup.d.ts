import { SxProps, Theme } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { FormGroup } from './types';
export type DefaultGroupProps<T extends FieldValues> = {
    group: FormGroup<T>;
    disabled?: boolean;
    readonly?: boolean;
    excludeLabel?: boolean;
    sx?: SxProps<Theme>;
};
export declare const DefaultGroup: <T extends FieldValues>({ group, disabled, readonly, excludeLabel, sx, }: DefaultGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
