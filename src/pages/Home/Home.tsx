import PostSection from './PostSection'
import CommentSection from './CommentSection'

import { HomeContainer } from './Home.style'


function Home() {
  return (
    <HomeContainer>
      <PostSection />
      <CommentSection />
    </HomeContainer>
  )
}

export default Home
