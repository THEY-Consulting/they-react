import { TableColumns } from './types';
type Props<T> = {
    columns: TableColumns<T>;
    onAdd?: () => void;
    extraCol?: boolean;
};
export declare const StickyTableHead: <T>({ columns, onAdd, extraCol }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
