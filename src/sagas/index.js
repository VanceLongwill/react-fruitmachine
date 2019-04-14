import { all } from 'redux-saga/effects'

import { watchSpinRequest, watchSpinSuccess } from './fruitMachine'

function* rootSaga() {
  yield all([
    watchSpinRequest(),
    watchSpinSuccess(),
    // more sagas here
  ])
}

export default rootSaga
