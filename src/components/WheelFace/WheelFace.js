// @flow
import React from 'react'
import styled from 'styled-components'

const Facet = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  color: rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  border: 10px solid rgb(191, 191, 191);
  background-color: ${p => p.color};
  transform: rotateX(${p => p.rotateX}deg) translateZ(${p => p.radius}px);
`

type Props = {
  color: string,
  radius: number,
  rotateX: number,
}

export function WheelFace(props: Props) {
  const { color, radius, rotateX } = props
  return <Facet color={color} radius={radius} rotateX={rotateX} />
}
