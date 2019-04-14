import React from 'react'
import { mount } from 'enzyme'

import { SpinResult } from './SpinResult'

describe('SpinResult', () => {
  const tests = [
    [{ key: 'some-uuid', color: 'blue', count: 3 }],
    [{ key: 'some-uuid', color: 'blue', count: 2 }],
    [{ key: 'some-uuid', color: 'blue', count: 1 }, { key: 'some-uuid', color: 'blue', count: 2 }],
  ]
  tests.forEach((test, i) => {
    it(`should match snapshot - ${i}`, () => {
      expect(mount(<SpinResult results={test}/>)).toMatchSnapshot()
    })
  })
})
