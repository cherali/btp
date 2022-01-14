import { useEffect, useRef, useState } from 'react';
import { IComment } from 'models/Comment';
import { useMutation, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getCommentsOfPost, addComment, clearSuggestion, getSuggestionList } from 'redux/actions/commentAction';
import { useDispatcher } from 'hooks/useDispatcher';
import { defaultOption } from 'providers/message';
import { ApiError } from 'common/utils/NetworkApi';

export const useCommentSection = () => {
  const comments: IComment[] = useSelector(s => s.comment.postComments)
  const selectedPostId = useSelector(s => s.post.selectedPostId)
  const suggestions = useSelector(s => s.comment.suggestions)

  const inputRef = useRef<any>(null)

  const dispatcher = useDispatcher()
  const dispatch = useDispatch()

  const [text, setText] = useState<string>('')
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false)

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

      // clear text
      setText('')

      fetchComment()
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Error', defaultOption)

      dispatcher('failed', undefined, error.type)
    }
  })

  useEffect(() => {
    setShowSuggestion(false)
    const stext = text.split(" ")
    // check if text has #
    const tag = stext.slice(-1)[0]

    if (tag.length > 1 && tag.indexOf('#') === 0) {
      // show select items
      setShowSuggestion(true)
      const tg = tag.slice(1)

      dispatch(clearSuggestion())

      setTimeout(() => {
        dispatch(getSuggestionList(tg))
      }, 700)

    } else {
      if (showSuggestion) {
        setShowSuggestion(false)
      }
    }

  }, [text])

  const handeChangeCommentText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onSendComment = () => {
    addAComment()
  }

  const handleClickTag = (tag: string) => () => {
    // hide tag container
    setShowSuggestion(false)

    // add tag to end of text
    const st = text.split(' ')
    st.pop()

    const newTag = `#${tag} `
    const tx = st.join(' ') + (text.indexOf('#') < 1 ? newTag : ` ${newTag}`)

    setText(tx)

    inputRef.current.focus()
  }


  return {
    comments,
    isLoading,
    postId: selectedPostId,
    handeChangeCommentText,
    text,
    onSendComment,
    addCommentLoading,
    isCommentValid: !!text.trim(),
    showSuggestion,
    suggestions,
    handleClickTag,
    inputRef,
  }
}
