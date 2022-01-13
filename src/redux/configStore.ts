import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducers'


export const configureStore = (preloadedState?: object) => {
  const middlewares: any[] = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const storeEnhancers = [middlewareEnhancer]

  const composedEnhancer: any = compose(
    ...storeEnhancers
  )

  // create store
  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer,
  )

  return { store }
}
