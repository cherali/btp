import { IComment } from 'models/Comment'
import { createReducer } from 'common/utils/reducerUtil'
import {
  GET_COMMENT_OF_POST_SUCCESS, GET_COMMENT_OF_POST_FAILED,
} from '../constants'


interface CommentState {
  postComments?: IComment[];
}
const initialState: CommentState = {
  postComments: undefined,
}


const getCommentsOfPostSuccess = (state: any, payload: IComment[]) => ({ ...state, postComments: payload })
const getCommentsOfPostFailed = (state: any) => ({ ...state, postComments: [] })


export default createReducer(initialState, {
  [GET_COMMENT_OF_POST_SUCCESS]: getCommentsOfPostSuccess,
  [GET_COMMENT_OF_POST_FAILED]: getCommentsOfPostFailed,
})