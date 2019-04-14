// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'

import {
  ANIMATION_DURATION,
  WHEEL_ANGLE,
  WHEEL_RADIUS,
  WHEELFACES_PER_ROW,
  COLORS_BY_INDEX,
} from '../../config/constants'
import WheelFace from '../WheelFace'

function getPosition(index) {
  return index * WHEEL_ANGLE + 360 * 2
}

const AnimatedWheel = styled.div`
  height: 120px;
  transform-style: preserve-3d;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-duration: ${ANIMATION_DURATION}s;
  animation-fill-mode: forwards;
  animation-name: ${p => p.animation};
  animation-delay: -${p => p.delay}ms;
`
type Props = {
  isLoading: boolean,
  delay: number,
  prevIndex: number,
  nextIndex: number,
}
export function Wheel(props: Props) {
  const { isLoading, delay, prevIndex, nextIndex } = props

  let toPos = nextIndex !== -1 ? getPosition(nextIndex) : 360
  if (prevIndex === nextIndex) {
    // make the wheel spin even if it will land at the same place twice
    toPos += 360
  }

  const animation = keyframes`
    from {
      transform: rotateX(0deg)
    }
    to {
      transform: rotateX(-${toPos}deg)
    }
  `

  const wheelFaces = []
  for (let i = 0; i < WHEELFACES_PER_ROW; i++) {
    wheelFaces.push(
      <WheelFace
        key={`${i}-${delay}`}
        rotateX={WHEEL_ANGLE * i}
        radius={WHEEL_RADIUS}
        color={COLORS_BY_INDEX[i].value}
      />
    )
  }

  return (
    <AnimatedWheel
      isLoading={isLoading}
      delay={delay}
      animation={animation}>
      {wheelFaces}
    </AnimatedWheel>
  )
}
