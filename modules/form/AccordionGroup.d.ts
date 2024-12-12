import { FieldValues } from 'react-hook-form';
import { FormGroup } from './types';
export type AccordionGroupProps<T extends FieldValues> = {
    group: FormGroup<T>;
    disabled?: boolean;
    readonly?: boolean;
};
export declare const AccordionGroup: <T extends FieldValues>({ group, disabled, readonly, }: AccordionGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
