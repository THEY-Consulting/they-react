import { ReactElement, ReactNode } from 'react';

export type TabItem = {
  index: string;
  icon?: ReactElement;
  label: string;
  content: ReactNode; // Content can be any React node/component.
  href?: string;
};

export type Tabs = TabItem[];
