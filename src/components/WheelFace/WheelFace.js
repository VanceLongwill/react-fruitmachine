import React from 'react'

import cx from 'classnames'
import styles from './WheelFace.module.css'

export function WheelFace(props) {
  const { color: backgroundColor, text, isActive, radius, rotateX } = props
  const transform = `rotateX(${rotateX}deg) translateZ(${radius}px)`
  return (
    <div style={{ transform, backgroundColor }} className={cx(styles.face)}>
      <p className={styles.inner}>{text}</p>
    </div>
  )
  // 
}
