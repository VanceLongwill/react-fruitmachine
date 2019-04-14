// @flow
import {
  SPIN_WHEEL_REQUEST,
  SPIN_WHEEL_SUCCESS,
  WINNING_SPIN,
  LOSING_SPIN,
  type Actions,
} from '../actions'
import uuid from 'uuid'
import type { Wheel } from '../types/fruitMachine'

type State = {
  +wheels: Array<Wheel>,
  +isSpinning: boolean,
  +isWin: boolean,
  +matchCount: number,
  +matchColor: string,
  +results: Array<{ key: string, color: string, count: number }>,
}

export const defaultState: State = {
  isSpinning: false,
  isWin: false,
  matchCount: 0,
  matchColor: '',
  wheels: [{ prev: 0, next: -1 }, { prev: 0, next: -1 }, { prev: 0, next: -1 }],
  results: [],
}

function fruitMachine(state: State = defaultState, action: Actions) {
  switch (action.type) {
    case SPIN_WHEEL_REQUEST:
      return {
        ...state,
        isSpinning: true,
        // uncomment to start wheel spinning before receiving random index results from API
        // wheels: state.wheels.map<Wheel>((wheel) => {
        //   return {
        //     prev: wheel.next === -1 ? 0 : wheel.next,
        //     next: wheel.next === -1 ? 0 : wheel.next,
        //   }
        // })
      }
    case SPIN_WHEEL_SUCCESS:
      return {
        ...state,
        wheels: state.wheels.map<Wheel>((wheel, i) => {
          return {
            prev: wheel.next === -1 ? 0 : wheel.next,
            next: action.payload.randoms[i],
          }
        }),
      }
    case WINNING_SPIN:
      return {
        ...state,
        isSpinning: false,
        isWin: true,
        results: [
          {
            key: uuid(),
            color: action.payload.color,
            count: action.payload.matchCount,
          },
          ...state.results,
        ],
      }
    case LOSING_SPIN:
      return {
        ...state,
        isSpinning: false,
        isWin: false,
        results: [
          {
            key: uuid(),
            color: action.payload.color,
            count: action.payload.matchCount,
          },
          ...state.results,
        ],
      }
    default:
      return state
  }
}

export default fruitMachine
