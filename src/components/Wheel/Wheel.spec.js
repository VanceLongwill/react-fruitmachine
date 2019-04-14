import React from 'react'
import { mount } from 'enzyme'

import { Wheel } from './Wheel'

describe('Wheel', () => {
  it('should match snapshot on initial render', () => {
    const props = {
      isLoading: false,
      delay: 300,
      prevIndex: 0,
      nextIndex: -1,
    }
    expect(mount(<Wheel {...props}/>)).toMatchSnapshot()
  })
  it('should match snapshot', () => {
    const props = {
      isLoading: false,
      delay: 300,
      prevIndex: 1,
      nextIndex: 7,
    }
    expect(mount(<Wheel {...props}/>)).toMatchSnapshot()
  })
})
