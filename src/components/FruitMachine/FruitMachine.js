import React from 'react'

import Wheel from '../Wheel'

import styles from './FruitMachine.module.css'

export function FruitMachine(props) {
  return (
    <div className={styles.stage}>
      <div className={styles.rotate}>
        <Wheel />
      </div>
    </div>
  )
}
