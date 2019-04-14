// @flow
import React from 'react'
import { connect } from 'react-redux'
import Confetti from 'react-dom-confetti'

import PageLayout from './components/PageLayout'
import Heading from './components/Heading'
import FruitMachine from './components/FruitMachine'
import SpinResult from './components/SpinResult'

import { spinWheelRequest } from './actions'
import type { Wheel, Result, State } from './types/fruitMachine'

const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  delay: 0,
  width: '10px',
  height: '10px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

type Props = {
  isSpinning: boolean,
  wheels: Array<Wheel>,
  isWin: boolean,
  results: Array<Result>,
  handleSpin: () => {},
}

export function App(props: Props) {
  const { isSpinning, wheels, isWin, results, handleSpin } = props
  return (
    <PageLayout>
      <Heading />
      <FruitMachine
        isSpinning={isSpinning}
        wheels={wheels}
        isWin={isWin}
        onSpin={handleSpin}
      />
      <Confetti config={confettiConfig} active={isWin} />
      <SpinResult results={results} />
    </PageLayout>
  )
}

export function mapStateToProps(state: { fruitMachine: State }) {
  return {
    isSpinning: state.fruitMachine.isSpinning,
    wheels: state.fruitMachine.wheels,
    isWin: state.fruitMachine.isWin,
    results: state.fruitMachine.results,
  }
}

const actionCreators = { handleSpin: spinWheelRequest }

export default connect(
  mapStateToProps,
  actionCreators
)(App)
