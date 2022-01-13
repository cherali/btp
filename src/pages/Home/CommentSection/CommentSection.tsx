import { FC } from 'react'

import Spinner from 'components/Spinner'
import Card from 'components/Card'
import CommentCard from 'components/CommentCard'

import { ICommentSectionProps } from './index.d'
import { useCommentSection } from './CommentSection.biz'
import { CommentSectionContainer } from './CommentSection.style'


const CommentSection: FC<ICommentSectionProps> = () => {
  const { postId, isLoading, comments } = useCommentSection()


  return (
    <CommentSectionContainer>
      <Card title={postId ? `Comments for post ${postId}` : ''}>

        {!postId && <p>Select an Post to see Comments</p>}

        {!isLoading && comments?.length === 0 && <p>No Comment</p>}

        {isLoading && <Spinner size='small' />}
        {!isLoading &&
          comments?.map((comment, i) => (
            <CommentCard key={comment.id} comment={comment} index={i} />
          ))
        }
      </Card>
    </CommentSectionContainer>
  )
}

export default CommentSection
