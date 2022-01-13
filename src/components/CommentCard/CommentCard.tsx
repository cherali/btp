import { FC } from 'react'
import { ICommentCardProps } from './index.d'
import { CommentCardBody, CommentCardContainer, CommentCardContent, CommentCardTitle, IndexText } from './CommentCard.style'


const CommentCard: FC<ICommentCardProps> = ({ comment, index }) => {
  return (
    <CommentCardContainer>

      {index !== undefined && <IndexText>{Number(index) + 1}</IndexText>}

      <CommentCardContent>
        <CommentCardTitle>{comment.name}</CommentCardTitle>
        <CommentCardBody>{comment.body}</CommentCardBody>
      </CommentCardContent>
    </CommentCardContainer>
  )
}

export default CommentCard
