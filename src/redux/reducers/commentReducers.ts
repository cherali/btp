import { IComment } from 'models/Comment'
import { createReducer } from 'common/utils/reducerUtil'
import {
  GET_SUGGESTION_LIST, CLEAR_SUGGESTION_LIST,
  GET_COMMENT_OF_POST_SUCCESS, GET_COMMENT_OF_POST_FAILED,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILED,
} from '../constants'


interface CommentState {
  postComments?: IComment[];
  suggestions?: string[];
}
const initialState: CommentState = {
  postComments: undefined,
  suggestions: undefined,
}

const getSuggestion = (state: any, payload: string[]) => ({ ...state, suggestions: payload })
const clearSuggestion = (state: any) => ({ ...state, suggestions: undefined })

const getCommentsOfPostSuccess = (state: any, payload: IComment[]) => ({ ...state, postComments: payload })
const getCommentsOfPostFailed = (state: any) => ({ ...state, postComments: [] })

const addCommentSuccess = (state: any) => ({ ...state })
const addCommentFaild = (state: any) => ({ ...state })


export default createReducer(initialState, {
  [GET_SUGGESTION_LIST]: getSuggestion,
  [CLEAR_SUGGESTION_LIST]: clearSuggestion,

  [GET_COMMENT_OF_POST_SUCCESS]: getCommentsOfPostSuccess,
  [GET_COMMENT_OF_POST_FAILED]: getCommentsOfPostFailed,

  [ADD_COMMENT_SUCCESS]: addCommentSuccess,
  [ADD_COMMENT_FAILED]: addCommentFaild,
})