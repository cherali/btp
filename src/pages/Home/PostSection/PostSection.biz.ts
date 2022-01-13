import { IPost } from 'models/Post';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getPosts } from 'redux/actions/postAction';
import { useDispatcher } from 'hooks/useDispatcher';
import { ApiResponse } from 'common/utils/NetworkApi';

export const usePostSection = () => {
  const posts: IPost[] = useSelector(s => s.post.posts)
  const dispatcher = useDispatcher()

  const { isLoading } = useQuery('post-list', getPosts, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatcher('success', data.result, data.type)
    },
    onError: (error: ApiResponse) => {
      // TODO: add alert message

      dispatcher('failed', undefined, error.type)
    }
  })

  return {
    isLoading,
    posts,
  }
}
