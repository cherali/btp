import { IComment } from 'models/Comment';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getCommentsOfPost } from 'redux/actions/commentAction';
import { useDispatcher } from 'hooks/useDispatcher';
import { defaultOption } from 'providers/message';
import { ApiError } from 'common/utils/NetworkApi';

export const useCommentSection = () => {
  const comments: IComment[] = useSelector(s => s.comment.postComments)
  const selectedPostId = useSelector(s => s.post.selectedPostId)
  const dispatcher = useDispatcher()

  const getComments = async () => await getCommentsOfPost(selectedPostId)


  const { isLoading } = useQuery(['post-list', selectedPostId], getComments, {
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


  return {
    comments,
    isLoading,
    postId: selectedPostId,
  }
}
