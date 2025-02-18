import { FormGroup } from './types';
import { DefaultValues, FieldValues, WatchObserver } from 'react-hook-form';
import { Action, AuthSubject } from '../auth/types';
import { Auditable } from '../audit/types';
import { SxProps, Theme } from '@mui/material';
type Props<T extends FieldValues | Partial<AuthSubject>> = {
    formData?: T;
    defaultValues?: DefaultValues<T>;
    fields: FormGroup<T>[];
    onSubmit?: (data: T) => void | Promise<void> | T | Promise<T>;
    onChange?: WatchObserver<T>;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    controlled?: boolean;
    displayContents?: boolean;
    action?: Action;
    hideDirtyNotification?: boolean;
    submitProps?: {
        sx?: SxProps<Theme>;
        label?: string;
    };
};
export declare const FormFactory: <T extends FieldValues & Partial<AuthSubject> & Auditable>(props: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
