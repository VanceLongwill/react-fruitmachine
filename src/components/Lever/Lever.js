import React from 'react'
import styled, { keyframes } from 'styled-components'

import { ReactComponent as LeverSVG } from './control-lever.svg'

const leverAnimation = keyframes`
  0% {
    transform: rotateZ(0);
  }
  50% {
    transform: rotateZ(50deg);
  }
  80% {
    transform: rotateZ(-10deg);
  }
  100% {
    transform: rotateZ(0);
  }
`

const AnimatedLever = styled.div`
  transform: rotate(90deg);
  position: absolute;
  margin-left: 450px;
  margin-top: -160px;
  height: 200px;
  width: 200px;
  #lever {
    /* the elements we want to animate are tagged with id="lever" in LeverSVG */
    cursor: grab;
    transform-origin: 50% 72%;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-name: ${p => (p.isSpinning ? leverAnimation : 'none')};
  }
`

export function Lever(props) {
  const { isSpinning, onClick } = props
  return (
    <AnimatedLever
      onClick={isSpinning ? null : onClick}
      isSpinning={isSpinning}>
      <LeverSVG />
    </AnimatedLever>
  )
}
