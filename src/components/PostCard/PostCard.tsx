import { FC } from 'react'
import { IPostCardProps } from './index.d'
import { PostCardBody, PostCardContainer, PostCardTitle } from './PostCard.style'


const PostCard: FC<IPostCardProps> = ({ post, onClick, isActive }) => {
  const handleClick = () => {
    onClick!(post.id)
  }

  return (
    <PostCardContainer onClick={handleClick} isActive={isActive}>
      <PostCardTitle>{post.title}</PostCardTitle>
      <PostCardBody>{post.body}</PostCardBody>
    </PostCardContainer>
  )
}

export default PostCard
