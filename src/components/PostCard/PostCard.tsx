import { FC } from 'react'
import { IPostCardProps } from './index.d'
import { PostCardBody, PostCardContainer, PostCardTitle } from './PostCard.style'


const PostCard: FC<IPostCardProps> = ({ post }) => {
  return (
    <PostCardContainer>
      <PostCardTitle>{post.title}</PostCardTitle>
      <PostCardBody>{post.body}</PostCardBody>
    </PostCardContainer>
  )
}

export default PostCard
