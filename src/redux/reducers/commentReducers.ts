import { IComment } from 'models/Comment'
import { createReducer } from 'common/utils/reducerUtil'
import {
  GET_COMMENT_OF_POST_SUCCESS, GET_COMMENT_OF_POST_FAILED,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILED,
} from '../constants'


interface CommentState {
  postComments?: IComment[];
}
const initialState: CommentState = {
  postComments: undefined,
}


const getCommentsOfPostSuccess = (state: any, payload: IComment[]) => ({ ...state, postComments: payload })
const getCommentsOfPostFailed = (state: any) => ({ ...state, postComments: [] })

const addCommentSuccess = (state: any) => ({ ...state })
const addCommentFaild = (state: any) => ({ ...state })


export default createReducer(initialState, {
  [GET_COMMENT_OF_POST_SUCCESS]: getCommentsOfPostSuccess,
  [GET_COMMENT_OF_POST_FAILED]: getCommentsOfPostFailed,

  [ADD_COMMENT_SUCCESS]: addCommentSuccess,
  [ADD_COMMENT_FAILED]: addCommentFaild,
})