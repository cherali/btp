import { ReactNode } from 'react';
import { IPost } from 'models/Post';

export interface IPostCardProps {
  key?: string | number;
  post: IPost;
  onClick?: (postId: number | undefined) => void;
  isActive?: boolean;
}

export interface IPostCardContainer {
  isActive?: boolean;
}