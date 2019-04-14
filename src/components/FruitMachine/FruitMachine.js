import React from 'react'
import styled from 'styled-components'

import Wheel from '../Wheel'
import Lever from '../Lever'

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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 600px;
`

export function FruitMachine(props) {
  const { 
    wheels, 
    onSpin,
    isSpinning,
  } = props

  return (
    <Layout>
      <FruitMachineContainer>
        <WheelsContainer>
          <Wheel prevIndex={wheels[0].prev} nextIndex={wheels[0].next} delay={600}/>
          <Wheel prevIndex={wheels[1].prev} nextIndex={wheels[1].next} delay={300}/>
          <Wheel prevIndex={wheels[2].prev} nextIndex={wheels[2].next} delay={0}/>
        </WheelsContainer>
        <Lever onClick={onSpin} isSpinning={isSpinning} />
      </FruitMachineContainer>
    </Layout>
  )
}
