import { ReactNode } from 'react';
import { IComment } from 'models/Comment';

export interface ICommentCardProps {
  key?: string | number;
  comment: IComment;
  index?: string | number;
}