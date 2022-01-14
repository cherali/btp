import { useState } from 'react';
import { IComment } from 'models/Comment';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getCommentsOfPost, addComment } from 'redux/actions/commentAction';
import { useDispatcher } from 'hooks/useDispatcher';
import { defaultOption } from 'providers/message';
import { ApiError } from 'common/utils/NetworkApi';

export const useCommentSection = () => {
  const comments: IComment[] = useSelector(s => s.comment.postComments)
  const selectedPostId = useSelector(s => s.post.selectedPostId)
  const dispatcher = useDispatcher()

  const [text, setText] = useState<string>('')

  const getComments = async () => await getCommentsOfPost(selectedPostId)
  const addNewComment = async () => await addComment(selectedPostId, text)


  const { isLoading, refetch: fetchComment } = useQuery(['comment-list', selectedPostId], getComments, {
    refetchOnWindowFocus: false,
    enabled: Boolean(selectedPostId),
    refetchOnMount: false,
    onSuccess: (data) => {
      dispatcher('success', data.result, data.type)
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Error', defaultOption)

      dispatcher('failed', undefined, error.type)
    }
  })

  const { isLoading: addCommentLoading, mutate: addAComment } = useMutation(addNewComment, {
    onSuccess: (data) => {
      dispatcher('success', data.result, data.type)

      toast.success('new comment added', defaultOption)

      fetchComment()
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Error', defaultOption)

      dispatcher('failed', undefined, error.type)
    }
  })

  const handeChangeCommentText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onSendComment = () => {
    addAComment()
  }


  return {
    comments,
    isLoading,
    postId: selectedPostId,
    handeChangeCommentText,
    onSendComment,
    addCommentLoading,
    isCommentValid: !!text.trim()
  }
}
