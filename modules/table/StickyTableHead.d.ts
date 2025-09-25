import { TableColumns, SortState } from './types';
import { Path } from 'react-hook-form';
type Props<T> = {
    columns: TableColumns<T>;
    onAdd?: () => void;
    extraCol?: boolean;
    sortState?: SortState<T>;
    onSort?: (column: Path<T>) => void;
};
export declare const StickyTableHead: <T>({ columns, onAdd, extraCol, sortState, onSort }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
