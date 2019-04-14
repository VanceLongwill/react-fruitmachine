import { getColorMatches, getRandom } from './'

describe('utils', () => {
  it('should find the frequencies of colors correctly', () => {
    const tests = [
      {
        input: [6, 7, 9],
        output: { blue: 1, yellow: 1, green: 1},
      },
      {
        input: [5, 7, 9],
        output: { yellow: 1, green: 2},
      },
      {
        input: [2, 6, 10],
        output: { blue: 3 },
      },
    ]
    tests.forEach(test => {
      expect(getColorMatches(test.input)).toEqual(test.output)
    })
  })

  it('should return a random number between 0 and 11', () => {
    const received = getRandom()
    const hasPassed = received >= 0 && received <= 11 && Number.isInteger(received)
    expect(hasPassed).toBe(true)
  })
})
