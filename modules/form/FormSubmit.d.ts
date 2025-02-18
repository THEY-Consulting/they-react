import { FieldValues } from 'react-hook-form';
import { SxProps, Theme } from '@mui/material';
type Props = {
    disabled?: boolean;
    hideDirtyNotification?: boolean;
    sx?: SxProps<Theme>;
    label?: string;
};
export declare const FormSubmit: <T extends FieldValues>({ disabled, hideDirtyNotification, sx, label }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
