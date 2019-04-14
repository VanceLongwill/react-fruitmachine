import React from 'react'
import { shallow } from 'enzyme'

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

    expect(shallow(<FruitMachine {...props} />)).toMatchSnapshot()
  })
})
