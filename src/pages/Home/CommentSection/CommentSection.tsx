import { FC } from 'react'

import Spinner from 'components/Spinner'
import Card from 'components/Card'
import CommentCard from 'components/CommentCard'

import { ICommentSectionProps } from './index.d'
import { useCommentSection } from './CommentSection.biz'
import { AddCommentContainer, AddCommentInput, CommentSectionContainer, NoTag, SendButton, SuggestionContainer, SuggestionItem } from './CommentSection.style'


const CommentSection: FC<ICommentSectionProps> = () => {
  const {
    postId,
    isLoading,
    comments,
    handeChangeCommentText,
    text,
    onSendComment,
    addCommentLoading,
    isCommentValid,
    showSuggestion,
    suggestions,
    handleClickTag,
    inputRef,
  } = useCommentSection()


  return (
    <CommentSectionContainer>
      <Card
        title='Comments'
        footer={
          <>
            <AddCommentContainer onSubmit={(event) => event.preventDefault()}>
              <AddCommentInput
                value={text}
                onChange={handeChangeCommentText}
                autoCapitalize='false'
                autoCorrect='false'
                disabled={!postId}
                ref={inputRef}
              />
              <SendButton disabled={!postId || addCommentLoading || !isCommentValid} onClick={onSendComment}>send</SendButton>
            </AddCommentContainer>
            {showSuggestion && <SuggestionContainer>
              {!suggestions && <Spinner size='small' />}

              {suggestions?.map((item: string) => (
                <SuggestionItem key={item} onClick={handleClickTag(item)}>{item}</SuggestionItem>
              ))}

              {suggestions?.length === 0 && <NoTag>No Tag</NoTag>}
            </SuggestionContainer>}
          </>
        }
      >
        {!postId && <p>Select an Post to see Comments</p>}

        {!isLoading && comments?.length === 0 && <p>No Comment</p>}

        {isLoading && <Spinner size='small' />}
        {!isLoading &&
          comments?.map(comment => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        }
      </Card>
    </CommentSectionContainer>
  )
}

export default CommentSection
