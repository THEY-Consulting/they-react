import { default as React } from '../../../node_modules/react';
import { TabItem } from './types';
type Props = {
    tabs: TabItem[];
    active?: string;
    initial?: string;
    onChange?: (value: string) => void;
    tabViewToggle?: React.ReactNode;
    aside?: React.ReactNode;
    autoDismount?: boolean;
};
export declare const TabsView: React.FC<Props>;
export {};
