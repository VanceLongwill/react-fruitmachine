import React from 'react'
import { mount } from 'enzyme'

import { Lever } from './Lever'

describe('Lever', () => {
  it('should match snapshot', () => {
    expect(mount(<Lever isSpinning={false} onClick={jest.fn()} />)).toMatchSnapshot()
  })
})
