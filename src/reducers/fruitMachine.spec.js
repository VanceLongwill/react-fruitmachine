import fruitMachine, { defaultState } from './fruitMachine'
import {
  spinWheelRequest,
  spinWheelSuccess,
  losingSpin,
  winningSpin,
} from '../actions'

describe('fruitMachine reducer', () => {
  it('should return the default state', () => {
    expect(fruitMachine(undefined, { type: 'some-action' })).toEqual(
      defaultState
    )
  })
  it('should set the isSpinning property on SPIN_WHEEL_REQUEST', () => {
    const state = fruitMachine(defaultState, spinWheelRequest())
    expect(state.isSpinning).toBe(true)
  })

  it('should set the next index correctly on SPIN_WHEEL_SUCCESS', () => {
    const randoms = [3, 4, 5]
    const state = fruitMachine(defaultState, spinWheelSuccess(randoms))
    randoms.forEach((rand, i) => {
      expect(state.wheels[i].prev).toBe(0)
      expect(state.wheels[i].next).toBe(rand)
    })

    const nextRandoms = [7, 9, 3]
    const nextState = fruitMachine(state, spinWheelSuccess(nextRandoms))
    nextRandoms.forEach((rand, i) => {
      expect(nextState.wheels[i].prev).toBe(state.wheels[i].next)
      expect(nextState.wheels[i].next).toBe(rand)
    })
  })

  it('should update correctly after WINNING_SPIN', () => {
    const color = 'blue'
    const count = 3
    const state = fruitMachine(defaultState, winningSpin(color, count))
    expect(state.isSpinning).toBe(false)
    expect(state.isWin).toBe(true)
    expect(state.results[0]).toEqual({ color, count })
  })

  it('should update correctly after LOSING_SPIN', () => {
    const color = 'blue'
    const count = 2
    const state = fruitMachine(defaultState, losingSpin(color, count))
    expect(state.isSpinning).toBe(false)
    expect(state.isWin).toBe(false)
    expect(state.results[0]).toEqual({ color, count })
  })
})
