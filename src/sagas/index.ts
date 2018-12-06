import { all } from 'redux-saga/effects'
import dialogSagas from './dialog'

export default function* rootSaga() {
  yield all([
      ...dialogSagas,
  ])
}