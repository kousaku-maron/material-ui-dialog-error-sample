import { take, put } from 'redux-saga/effects'

const data = () => {
  const _data = {
      type: 'SMALLER_OPEN',
      payload: true,
  }
  return _data
}

function* comboSaga() {
  while (true) {
    const action = yield take('BIGGER_OPEN')
    if(action.payload) {
      yield put(data())
    }
  }
}

const sagas = [
  comboSaga(),
]

export default sagas