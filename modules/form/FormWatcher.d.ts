import { ReactNode } from '../../../node_modules/react';
import { FieldValues, UseFormWatch, WatchObserver } from 'react-hook-form';
type Props<T extends FieldValues> = {
    watch: UseFormWatch<T>;
    onChange?: WatchObserver<T>;
};
export declare const FormWatcher: <T extends FieldValues>({ watch, onChange }: Props<T>) => ReactNode;
export {};
