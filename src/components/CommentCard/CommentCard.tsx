import { FC } from 'react'
import { ICommentCardProps } from './index.d'
import { CommentCardBody, CommentCardContainer, CommentCardTitle } from './CommentCard.style'


const CommentCard: FC<ICommentCardProps> = ({ comment }) => {
  return (
    <CommentCardContainer>
        <CommentCardTitle>{comment.name}</CommentCardTitle>
        <CommentCardBody>{comment.body}</CommentCardBody>
    </CommentCardContainer>
  )
}

export default CommentCard
