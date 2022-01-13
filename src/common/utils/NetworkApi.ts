import axios, { AxiosRequestHeaders, Method } from 'axios'
interface INetwork {
  method: Method;
  url: string;
  successType: string;
  failType: string;
  bodyParams?: any;
  headerParams?: AxiosRequestHeaders;
  cancelable?: boolean;
}


interface ApiErrorObject {
  status: string;
  message: string;
  data: any;
}

export interface ApiResponse {
  error: ApiErrorObject | undefined;
  type: string;
  result: any;
}


const CancelToken = axios.CancelToken
let cancel: any

async function NetworkApi({ method, url, successType, failType, bodyParams, headerParams, cancelable = false, }: INetwork) {

  let headers = {
    ...headerParams,
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }

  return await axios({
    method: method,
    headers,
    data: bodyParams,
    url,
    // set cancel token
    cancelToken: new CancelToken(function (c) {
      if (cancelable) cancel = c;
      else cancel = undefined
    }),
    // add timeout
    timeout: 20000,
  }).then(res => ({ result: res.data, type: successType, error: undefined }))
    .catch(error => {
      const errorObject: ApiErrorObject = {
        status: error.response.status,
        message: error.response.statusText,
        data: error.response.data
      }

      throw ({ error: errorObject, type: failType, result: undefined } as ApiResponse)
    })
}

export default NetworkApi
