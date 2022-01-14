import NetworkApi from 'common/utils/NetworkApi'
import { commentUrl } from 'common/urls'
import {
  GET_SUGGESTION_LIST, CLEAR_SUGGESTION_LIST,
  GET_COMMENT_OF_POST_SUCCESS, GET_COMMENT_OF_POST_FAILED,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILED,
} from '../constants'

const SUGGESTION_LIST: string[] = [
  'html', 'css', 'js', 'java_script', 'react', 'programing', 'redux', 'web'
]


export const getCommentsOfPost = (postId: number) => NetworkApi({
  url: `${commentUrl}?postId=${postId}`,
  method: 'get',
  successType: GET_COMMENT_OF_POST_SUCCESS,
  failType: GET_COMMENT_OF_POST_FAILED,
  cancelable: true,
})

export const addComment = (postId: number, body: string) => NetworkApi({
  url: `${commentUrl}`,
  method: 'post',
  bodyParams: {
    postId,
    body,
    name: body.slice(0, 5),
    email: 'test@test.co'
  },
  successType: ADD_COMMENT_SUCCESS,
  failType: ADD_COMMENT_FAILED,
  cancelable: true,
})

export const getSuggestionList = (text: string) => ({ type: GET_SUGGESTION_LIST, payload: SUGGESTION_LIST.filter(r => r.indexOf(text) > -1 ? r : null) })

export const clearSuggestion = () => ({ type: CLEAR_SUGGESTION_LIST })