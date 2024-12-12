import { TableColumns } from './types';
type Props<T> = {
    data: T[];
    columns: TableColumns<T>;
    page: number;
    rowsPerPage: number;
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
    noEntriesMessage?: string;
};
export declare const StickyTableBody: <T>({ data, columns, page, rowsPerPage, onView, onEdit, noEntriesMessage, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
