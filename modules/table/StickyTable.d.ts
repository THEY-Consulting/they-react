import { TableColumns } from './types';
type Props<T> = {
    entity?: string;
    data?: T[];
    columns: TableColumns<T>;
    isPending: boolean;
    error?: Error | null;
    onView?: (row: T) => void;
    onAdd?: () => void;
    onEdit?: (row: T) => void;
    noEntriesMessage?: string;
};
export declare const StickyTable: <T>({ entity, data, columns, isPending, error, onView, onAdd, onEdit, noEntriesMessage, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
