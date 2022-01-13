import NetworkApi from 'common/utils/NetworkApi'
import { postUrl } from 'common/urls'
import {
  SET_POST_ID, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILED,
} from '../constants'


export const getPosts = () => NetworkApi({
  url: postUrl,
  method: 'get',
  successType: GET_POST_LIST_SUCCESS,
  failType: GET_POST_LIST_FAILED,
})


export const setSelectedPost = (postId: number) => ({ type: SET_POST_ID, payload: postId })
