import { put, delay, takeEvery } from 'redux-saga/effects'

import {
  SPIN_WHEEL_REQUEST,
  SPIN_WHEEL_SUCCESS,
  spinWheelSuccess,
  winningSpin,
  losingSpin,
} from '../actions'
import { getColorMatches, getRandom } from '../utils'

export function* handleGenerateSpin() {
  /*
   * Using Math.random to determine where the spin will land is easily hackable
   * e.g. in console `Math.random = () => 0.5` will result in [6,6,6]
   */
  yield put(spinWheelSuccess([getRandom(), getRandom(), getRandom()]))
}

export function* handleSpinResult(action) {
  const matches = getColorMatches(action.payload.randoms)

  const sortedMatches = Object.entries(matches).sort((a, b) => {
    return b[1] - a[1]
  })

  const mostFrequent = sortedMatches[0]

  // wait for animation to finish
  yield delay(2000)

  switch (mostFrequent[1]) {
    case 3:
      yield put(winningSpin(...mostFrequent))
      break
    default:
      yield put(losingSpin(...mostFrequent))
  }
}

export function* watchSpinRequest() {
  yield takeEvery(SPIN_WHEEL_REQUEST, handleGenerateSpin)
}

export function* watchSpinSuccess() {
  yield takeEvery(SPIN_WHEEL_SUCCESS, handleSpinResult)
}
