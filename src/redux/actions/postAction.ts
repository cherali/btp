import NetworkApi from 'common/utils/NetworkApi'
import { postUrl } from 'common/urls'
import {
  GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILED,
} from '../constants'


export const getPosts = () => NetworkApi({
  url: postUrl,
  method: 'get',
  successType: GET_POST_LIST_SUCCESS,
  failType: GET_POST_LIST_FAILED,
})
