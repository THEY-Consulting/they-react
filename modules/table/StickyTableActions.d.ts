type Props<T> = {
    row: T;
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
};
export declare const StickyTableActions: <T>({ row, onView, onEdit }: Props<T>) => import("react/jsx-runtime").JSX.Element | null;
export {};
