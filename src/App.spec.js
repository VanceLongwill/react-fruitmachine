import React from 'react'
import { mount } from 'enzyme'

import { App } from './App'

describe('App', () => {
  it('should match on initial render', () => {
    const props = {
      isSpinning: false,
      wheels: [{ prev: 0, next: -1 }, { prev: 0, next: -1 }, { prev: 0, next: -1 }],
      isWin: false,
      results: [],
      handleSpin: () => {},
    }
    expect(mount(<App {...props}/>)).toMatchSnapshot()
  })
})
