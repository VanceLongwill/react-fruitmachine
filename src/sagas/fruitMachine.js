// @flow
import { put, delay, takeEvery } from 'redux-saga/effects'

import {
  SPIN_WHEEL_REQUEST,
  SPIN_WHEEL_SUCCESS,
  spinWheelSuccess,
  winningSpin,
  losingSpin,
} from '../actions'
import { getColorMatches, getRandom } from '../utils'
import { ANIMATION_DURATION } from '../config/constants'

export function* handleGenerateSpin(): any {
  /*
   * Using Math.random to determine where the spin will land is easily hackable
   * e.g. in browser console `Math.random = () => 0.5` will result in [6,6,6]
   */
  yield put(spinWheelSuccess([getRandom(), getRandom(), getRandom()]))
}

export function* handleSpinResult(action: { payload: { randoms: Array<number> } }): any {
  const matches = getColorMatches(action.payload.randoms)


  const sortedMatches = Object.entries(matches).sort((a, b) => {
    // flow type refinement
    return Number(b[1]) - Number(a[1])
  })

  const mostFrequent = sortedMatches[0]

  // wait for animation to finish
  yield delay(1000 * ANIMATION_DURATION)

  switch (mostFrequent[1]) {
    case 3:
      yield put(winningSpin(mostFrequent[0], mostFrequent[1]))
      break
    case 2:
    case 1:
      yield put(losingSpin(mostFrequent[0], mostFrequent[1]))
      break
    default:
      throw new Error()
  }
}

export function* watchSpin(): any {
  yield takeEvery(SPIN_WHEEL_REQUEST, handleGenerateSpin)
  yield takeEvery(SPIN_WHEEL_SUCCESS, handleSpinResult)
}
