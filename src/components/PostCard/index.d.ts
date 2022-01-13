import { ReactNode } from 'react';
import { IPost } from 'models/Post';

export interface IPostCardProps {
  key?: string | number;
  post: IPost;
}