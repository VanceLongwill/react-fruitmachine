import { handleGenerateSpin, handleSpinResult } from './fruitMachine'
import { spinWheelSuccess, winningSpin, losingSpin } from '../actions'


describe('fruitMachine sagas', () => {
  it('handleGenerateSpin should dispach a SPIN_WHEEL_SUCCESS action', () => {
    Math.random = () => 0
    const gen = handleGenerateSpin()
    expect(gen.next().value.payload.action).toEqual(spinWheelSuccess([0,0,0]))
  })

  it('handleSpinResult should find the most frequently occuring color', () => {
    const tests = [
      {
        input: [0, 4, 8],
        color: 'red',
        output: winningSpin('red', 3),
      },
      {
        input: [0, 5, 7],
        color: 'red',
        output: losingSpin('red', 1),
      },
      {
        input: [0, 4, 7],
        color: 'red',
        output: losingSpin('red', 2),
      }
    ]

    tests.forEach(test => {
      const gen = handleSpinResult({ payload: { randoms: test.input } })
      expect(gen.next().value.payload.args[0]).toBe(2000)
      expect(gen.next().value.payload.action).toEqual(test.output)
    })
  })
})
