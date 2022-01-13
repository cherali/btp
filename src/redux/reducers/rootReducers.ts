import { combineReducers } from 'redux'
import post from './postReducers'
import comment from './commentReducers'

type RootState = ReturnType<typeof rootReducers>

declare module 'react-redux' {
  interface DefaultRootState extends RootState { }
}

const rootReducers = combineReducers({
  post,
  comment,
})

export default rootReducers
