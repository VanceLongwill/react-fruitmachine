import React from 'react'
import { mount } from 'enzyme'

import { Heading } from './Heading'

describe('Heading', () => {
  it('should match snapshot', () => {
    expect(mount(<Heading />)).toMatchSnapshot()
  })
})
