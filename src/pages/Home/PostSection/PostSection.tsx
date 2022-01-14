import { FC } from 'react'

import Spinner from 'components/Spinner'
import Card from 'components/Card'
import PostCard from 'components/PostCard'

import { IPostSectionProps } from './index.d'
import { usePostSection } from './PostSection.biz'
import { PostSectionContainer } from './PostSection.style'


const PostSection: FC<IPostSectionProps> = () => {
  const { isLoading, posts, handleClickPost, selectedPostId } = usePostSection()


  return (
    <PostSectionContainer>
      <Card title='Posts'>
        {isLoading && <Spinner size='small' />}
        {
          posts?.map(post => (
            <PostCard key={post.id} post={post} onClick={handleClickPost} isActive={post.id === selectedPostId} />
          ))
        }
      </Card>
    </PostSectionContainer>
  )
}

export default PostSection
