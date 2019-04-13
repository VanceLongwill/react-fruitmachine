import React, { useState } from 'react'
import styled from 'styled-components'

import Wheel from '../Wheel'

const FruitMachineContainer = styled.div`
  margin-top: 250px;
  perspective: 2000;
`

const WheelsContainer = styled.div`
  transform-style: preserve-3d;
  display: grid;
  grid-template-columns: 120px 120px 120px;
  grid-template-rows: auto;
  grid-template-areas: "wheel wheel wheel";
`

export function FruitMachine(props) {
  const [isPaused, setPause] = useState(true)

  return (
    <div>
      <button onClick={() => {
        setPause(!isPaused)
      }}>
        Click me
      </button>
      <FruitMachineContainer>
        <WheelsContainer>
          <Wheel isPaused={isPaused} prevIndex={0} nextIndex={11} delay={600}/>
          <Wheel isPaused={isPaused} prevIndex={0} nextIndex={1} delay={300}/>
          <Wheel isPaused={isPaused} prevIndex={0} nextIndex={2} delay={0}/>
        </WheelsContainer>
      </FruitMachineContainer>
    </div>
  )
}
