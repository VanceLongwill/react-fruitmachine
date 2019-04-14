import React from 'react'
import { mount } from 'enzyme'

import { PageLayout } from './PageLayout'

describe('PageLayout', () => {
  it('should match snapshot', () => {
    expect(mount(<PageLayout />)).toMatchSnapshot()
  })
})
