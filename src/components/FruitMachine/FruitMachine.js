import React, { useState, useEffect } from 'react'

import Wheel from '../Wheel'

import styles from './FruitMachine.module.css'

function usePauseState(delay) {
  const [ isPaused, setPause ] = useState(true);

  const setPauseWrapper = () => {
    if (!isPaused) {
      if (delay) {
        const t = setTimeout(() => setPause(true), delay)
        return () => clearTimeout(t)
      }
      setPause(true)
      return
    }
    setPause(false)
  }

  return [ isPaused, setPauseWrapper ] 
}

export function FruitMachine(props) {
  const [isFirstWheelPaused, setFirstWheelPause] = usePauseState(0)
  const [isSecondWheelPaused, setSecondWheelPause] = usePauseState(300)
  const [isThirdWheelPaused, setThirdWheelPause] = usePauseState(600)


  return (
    <div>
      <button onClick={() => {
        setFirstWheelPause()
        setSecondWheelPause()
        setThirdWheelPause()
      }}>
        Click me
      </button>
      <div className={styles.stage}>
        <div className={styles.rotate}>
          <Wheel isPaused={isFirstWheelPaused} delay={0}/>
          <Wheel isPaused={isSecondWheelPaused} delay={300}/>
          <Wheel isPaused={isThirdWheelPaused} delay={600}/>
        </div>
      </div>
    </div>
  )
}
