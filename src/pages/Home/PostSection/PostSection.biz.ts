import { useState } from 'react';
import { IPost } from 'models/Post';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getPosts, setSelectedPost } from 'redux/actions/postAction';
import { useDispatcher } from 'hooks/useDispatcher';
import { defaultOption } from 'providers/message';
import { ApiError } from 'common/utils/NetworkApi';

export const usePostSection = () => {
  const posts: IPost[] = useSelector(s => s.post.posts)
  const selectedPostId = useSelector(s => s.post.selectedPostId)

  const [filter, setFilter] = useState<string>('')

  const dispatcher = useDispatcher()
  const dispatch = useDispatch()

  const { isLoading } = useQuery('post-list', getPosts, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatcher('success', data.result, data.type)
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Error', defaultOption)

      dispatcher('failed', undefined, error.type)
    }
  })

  const handleClickPost = (postId: number | undefined) => {
    if (postId) {
      dispatch(setSelectedPost(postId))
    }
  }

  const handleFilterPost = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const filteredPost = filter.trim() === '' ? posts : posts.filter(r => (r.title as string).indexOf(filter) > -1 ? r : null);

  return {
    isLoading,
    posts: filteredPost,
    handleClickPost,
    selectedPostId,
    handleFilterPost,
  }
}
