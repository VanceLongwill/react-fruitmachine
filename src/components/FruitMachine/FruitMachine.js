import React, { useState } from 'react'

import Wheel from '../Wheel'

import styles from './FruitMachine.module.css'

export function FruitMachine(props) {
  const [isPaused, setPause] = useState(true)

  return (
    <div>
      <button onClick={() => {
        setPause(!isPaused)
      }}>
        Click me
      </button>
      <div className={styles.stage}>
        <div className={styles.rotate}>
          <Wheel isPaused={isPaused} prevIndex={0} nextIndex={11} delay={600}/>
          <Wheel isPaused={isPaused} prevIndex={0} nextIndex={1} delay={300}/>
          <Wheel isPaused={isPaused} prevIndex={0} nextIndex={2} delay={0}/>
        </div>
      </div>
    </div>
  )
}
