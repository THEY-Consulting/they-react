import { ReactElement, ReactNode } from '../../../node_modules/react';
export type TabItem = {
    index: string;
    icon?: ReactElement;
    label: string;
    content: ReactNode;
    href?: string;
};
export type Tabs = TabItem[];
