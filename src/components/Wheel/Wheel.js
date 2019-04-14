import React from 'react'
import styled, { keyframes } from 'styled-components'

import { ANIMATION_DURATION, WHEEL_ANGLE, WHEEL_RADIUS, WHEELFACES_PER_ROW, COLORS_BY_INDEX } from '../../config/constants'
import WheelFace from '../WheelFace'

function getPosition(index) {
  let pos = (index * WHEEL_ANGLE) + (360 * 2)
  return pos
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

export function Wheel(props) {
  const { isLoading, delay, isPaused, prevIndex, nextIndex } = props;

  let toPos = nextIndex !== -1 ? getPosition(nextIndex) : 360
  if (prevIndex === nextIndex) { // make the wheel spin even if it will land at the same place twice
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
        rotateX={WHEEL_ANGLE * i} 
        radius={WHEEL_RADIUS} 
        color={COLORS_BY_INDEX[i].value} 
        text={i} />
    )
  }

  return <AnimatedWheel isLoading={isLoading} delay={delay} isPaused={isPaused} animation={animation}>{wheelFaces}</AnimatedWheel>

  //     <WheelFace color="red"/>
  //     <WheelFace color="blue"/>
  //     <WheelFace color="green"/>
  //     <WheelFace color="yellow"/>
}
