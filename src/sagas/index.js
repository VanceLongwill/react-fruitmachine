// @flow
import { all } from 'redux-saga/effects'

import { watchSpin } from './fruitMachine'

function* rootSaga(): any {
  yield all([
    watchSpin(),
    // more sagas here
  ])
}

export default rootSaga
