import { SxProps, Theme } from '@mui/material';
import { TableColumns } from './types';
type Props<T> = {
    entity?: string;
    data?: T[];
    columns: TableColumns<T>;
    isPending?: boolean;
    error?: Error | null;
    onView?: (row: T) => void;
    onAdd?: () => void;
    onEdit?: (row: T) => void;
    noEntriesMessage?: string;
    sx?: SxProps<Theme>;
};
export declare const StickyTable: <T>({ entity, data, columns, isPending, error, onView, onAdd, onEdit, noEntriesMessage, sx, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
