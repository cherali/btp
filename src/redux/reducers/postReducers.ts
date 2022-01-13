import { IPost } from 'models/Post';
import { createReducer } from 'common/utils/reducerUtil'
import {
  GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILED,
} from '../constants'


interface PostState {
  posts?: IPost[]
}
const initialState: PostState = {
  posts: undefined,
}


const getPostsSuccess = (state: any, payload: IPost[]) => ({ ...state, posts: payload })
const getPostsFailed = (state: any) => ({ ...state, posts: [] })


export default createReducer(initialState, {
  [GET_POST_LIST_SUCCESS]: getPostsSuccess,
  [GET_POST_LIST_FAILED]: getPostsFailed,
})