import React from 'react'
import { mount } from 'enzyme'

import { WheelFace } from './WheelFace'

describe('WheelFace', () => {
  it('should match snapshot', () => {
    expect(mount(<WheelFace color={'green'} radius={200} rotateX={20}/>)).toMatchSnapshot()
  })
})
