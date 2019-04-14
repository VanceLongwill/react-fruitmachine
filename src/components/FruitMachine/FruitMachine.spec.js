import React from 'react'
import { mount } from 'enzyme'

import { FruitMachine } from './FruitMachine'

describe('FruitMachine', () => {
  it('should match snapshot for initial state', () => {
    const props = {
      spinWheelRequest: jest.fn(),
      wheels: [
        { prev: 0, next: -1 },
        { prev: 0, next: -1 },
        { prev: 0, next: -1 },
      ],
      results: [],
      isWin: false,
    }

    expect(mount(<FruitMachine {...props} />)).toMatchSnapshot()
  })

  it('should match snapshot for a losing state', () => {
    const props = {
      spinWheelRequest: jest.fn(),
      wheels: [
        { prev: 0, next: 6 },
        { prev: 0, next: 8 },
        { prev: 0, next: 9 },
      ],
      results: [{ key: 'some-uuid', color: 'blue', count: 1 }],
      isWin: false,
    }

    expect(mount(<FruitMachine {...props} />)).toMatchSnapshot()
  })

  it('should match snapshot for a winning state', () => {
    const props = {
      spinWheelRequest: jest.fn(),
      wheels: [
        { prev: 0, next: 4 },
        { prev: 0, next: 4 },
        { prev: 0, next: 4 },
      ],
      results: [{ key: 'some-uuid', color: 'blue', count: 3 }],
      isWin: true,
    }

    expect(mount(<FruitMachine {...props} />)).toMatchSnapshot()
  })
})
