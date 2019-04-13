import React from 'react'
import cx from 'classnames'

import WheelFace from '../WheelFace'
import styles from './Wheel.module.css'

const WHEELFACES_PER_ROW = 12
const WHEEL_RADIUS = 200
const wheelAngle = 360 / WHEELFACES_PER_ROW

const colors = ['red', 'green', 'blue', 'yellow']

export function Wheel(props) {
  const { delay, isPaused } = props;
  const animationDelay = `-${0}ms`;

  const wheelFaces = []
  for (let i = 0; i < WHEELFACES_PER_ROW; i++) {
    wheelFaces.push(
      <WheelFace rotateX={wheelAngle * i} radius={WHEEL_RADIUS} color="green" text={i} />
    )
  }

  return <div style={{ animationDelay }} className={cx(styles.wheel, { [styles.pause]: isPaused })}>{wheelFaces}</div>

  //     <WheelFace color="red"/>
  //     <WheelFace color="blue"/>
  //     <WheelFace color="green"/>
  //     <WheelFace color="yellow"/>
}
