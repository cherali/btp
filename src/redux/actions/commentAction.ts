import NetworkApi from 'common/utils/NetworkApi'
import { commentUrl } from 'common/urls'
import {
  GET_COMMENT_OF_POST_SUCCESS, GET_COMMENT_OF_POST_FAILED,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILED,
} from '../constants'


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