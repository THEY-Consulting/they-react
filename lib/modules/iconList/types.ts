import { ReactElement } from 'react';

export type Source = {
  id: string;
  name: string;
  description: string;
  active: boolean;
  icon: ReactElement;
  color?: string;
};

export type IconListTheme = {
  header?: {
    backgroundColor?: string;
    textColor?: string;
  };
  card?: {
    backgroundColor?: string;
    borderColor?: string;
    elevation?: number;
  };
  content?: {
    backgroundColor?: string;
  };
};
