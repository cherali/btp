import { IPost } from 'models/Post';
import { createReducer } from 'common/utils/reducerUtil'
import {
  SET_POST_ID,

  GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILED,
} from '../constants'


interface PostState {
  posts?: IPost[];
  selectedPostId?: number;
}
const initialState: PostState = {
  posts: undefined,
  selectedPostId: undefined,
}

const setPostId = (state: any, payload: number) => ({ ...state, selectedPostId: payload })

const getPostsSuccess = (state: any, payload: IPost[]) => ({ ...state, posts: payload })
const getPostsFailed = (state: any) => ({ ...state, posts: [] })


export default createReducer(initialState, {
  [SET_POST_ID]: setPostId,

  [GET_POST_LIST_SUCCESS]: getPostsSuccess,
  [GET_POST_LIST_FAILED]: getPostsFailed,
})