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

interface ApiResponse {
  error: ApiErrorObject | undefined;
  type: string;
  result: any;
}

export class ApiError extends Error {
  public error: ApiErrorObject | undefined;
  public type: string;
  public result: any;

  constructor(errorObject: ApiResponse) {
    super();
    this.error = errorObject.error;
    this.type = errorObject.type;
    this.result = errorObject.result
  }
}



const CancelToken = axios.CancelToken
let cancel: any

async function NetworkApi({ method, url, successType, failType, bodyParams, headerParams, cancelable = false, }: INetwork) {

  let headers = {
    ...headerParams,
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }

  cancelable && cancel && cancel()

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

      throw new ApiError({ error: errorObject, type: failType, result: undefined })
    })
}

export default NetworkApi
