import React from 'react'
import styled from 'styled-components'

import Wheel from '../Wheel'
import Lever from '../Lever'

const FruitMachineContainer = styled.div`
  margin-top: 200px;
  perspective: 2000;
  &::after {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -60px;
    right: -59px;
    top: -200px;
    z-index: 999;
    border: 40px solid rgba(255, 211, 78, 0.8);
    border-top: 200px solid rgba(255, 185, 51, 0.8);
    border-bottom: 200px solid rgba(239, 163, 19, 0.8);
    pointer-events: none;
    border-radius: 12px;
    box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.4);
  }
`

const WheelsContainer = styled.div`
  transform-style: preserve-3d;
  display: grid;
  grid-template-columns: 120px 120px 120px;
  grid-template-rows: auto;
  grid-template-areas: 'wheel wheel wheel';
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 550px;
  width: 600px;
`

export function FruitMachine(props) {
  const { wheels, onSpin, isSpinning } = props

  return (
    <Layout>
      <FruitMachineContainer>
        <WheelsContainer>
          <Wheel
            prevIndex={wheels[0].prev}
            nextIndex={wheels[0].next}
            delay={600}
          />
          <Wheel
            prevIndex={wheels[1].prev}
            nextIndex={wheels[1].next}
            delay={300}
          />
          <Wheel
            prevIndex={wheels[2].prev}
            nextIndex={wheels[2].next}
            delay={0}
          />
        </WheelsContainer>
        <Lever onClick={onSpin} isSpinning={isSpinning} />
      </FruitMachineContainer>
    </Layout>
  )
}
