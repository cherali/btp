import { useDispatch } from 'react-redux'

type DispatchMode = 'success' | 'failed'


export const useDispatcher = () => {
  const dispatch = useDispatch()

  return (mode: DispatchMode, data?: any, type: string = '') => {

    if (type === '') throw new Error('useDispatcher require a type.')

    if (mode === 'success') {
      return dispatch({ type, payload: data })
    } else if (mode === 'failed') {
      return dispatch({ type, payload: data })
    }

    throw new Error('useDispatcher failed to indentify mode.')
  }
}