import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { BiggerReducer, BiggerState } from './modules/bigger'
import { SmallerReducer, SmallerState } from './modules/smaller'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export interface AppState {
  bigger: BiggerState
  smaller: SmallerState
}

const configureStore = () => {
  const store = createStore(
    combineReducers<AppState>({
      bigger: BiggerReducer,
      smaller: SmallerReducer,
    }),
    {},
    applyMiddleware(sagaMiddleware, reduxLogger)
  )
  sagaMiddleware.run(rootSaga)
  
  return store
}

export default configureStore