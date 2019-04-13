// @flow
import { SPIN_WHEEL, type Actions } from '../actions'

type Wheel = {
  prev: number,
  next: number,
}

type State = {
  wheels: Array<Wheel>
}

const defaultState: State = {
  wheels: [
    {prev: 0, next: -1},
    {prev: 0, next: -1},
    {prev: 0, next: -1},
  ],
}

function generateSpin(wheel: Wheel): Wheel {
  return {
    prev: wheel.next === -1 ? 0 : wheel.next,
    next: Math.floor(Math.random() * 12),
  }
}

function fruitMachine(state: State = defaultState, action: Actions) {
  switch(action.type) {
    case SPIN_WHEEL:
      return {
        ...state,
        wheels: state.wheels.map<Wheel>(generateSpin),
      }
    default:
      return state
  }
}

export default fruitMachine
