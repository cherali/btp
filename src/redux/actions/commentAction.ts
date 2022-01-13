import NetworkApi from 'common/utils/NetworkApi'
import { commentUrl } from 'common/urls'
import {
  GET_COMMENT_OF_POST_SUCCESS, GET_COMMENT_OF_POST_FAILED,
} from '../constants'


export const getCommentsOfPost = (postId: number) => NetworkApi({
  url: `${commentUrl}?postId=${postId}`,
  method: 'get',
  successType: GET_COMMENT_OF_POST_SUCCESS,
  failType: GET_COMMENT_OF_POST_FAILED,
  cancelable: true,
})
