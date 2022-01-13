import { combineReducers } from 'redux'
import post from './postReducers'

type RootState = ReturnType<typeof rootReducers>

declare module 'react-redux' {
  interface DefaultRootState extends RootState { }
}

const rootReducers = combineReducers({
  post,
})

export default rootReducers
