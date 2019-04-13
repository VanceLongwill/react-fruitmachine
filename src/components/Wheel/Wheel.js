import React from 'react'
import styled, { keyframes } from 'styled-components'

import WheelFace from '../WheelFace'

const WHEELFACES_PER_ROW = 12
const WHEEL_RADIUS = 200
const wheelAngle = 360 / WHEELFACES_PER_ROW

const colors = ['red', 'green', 'blue', 'yellow']

function getPosition(index) {
  return (360 - (index * wheelAngle)) + 360
}

const AnimatedWheel = styled.div`
  height: 120px;
  transform-style: preserve-3d;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${p => p.animation};
  animation-delay: -${p => !p.isPaused ? (p.delay || 0) : 0}ms;
`
// animation-play-state: ${p => p.isPaused ? 'paused' : 'running'};

export function Wheel(props) {
  console.log("WHEELPROPS", props)
  const { delay, isPaused, prevIndex, nextIndex } = props;

  const animation = keyframes`
    from {
      transform: rotateX(${prevIndex !== 0 ? getPosition(prevIndex) : prevIndex}deg)
    }
    to {
      transform: rotateX(${nextIndex !== -1 ? getPosition(nextIndex) : 0}deg)
    }
  ` 

  const wheelFaces = []
  for (let i = 0; i < WHEELFACES_PER_ROW; i++) {
    wheelFaces.push(
      <WheelFace rotateX={wheelAngle * i} radius={WHEEL_RADIUS} color="lightblue" text={i} />
    )
  }

  return <AnimatedWheel delay={delay} isPaused={isPaused} animation={animation}>{wheelFaces}</AnimatedWheel>

  //     <WheelFace color="red"/>
  //     <WheelFace color="blue"/>
  //     <WheelFace color="green"/>
  //     <WheelFace color="yellow"/>
}
