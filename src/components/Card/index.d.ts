import { ReactNode } from 'react';

export interface ICardProps {
  children?: ReactNode;
  title?: string;
  action?: ReactNode;
}