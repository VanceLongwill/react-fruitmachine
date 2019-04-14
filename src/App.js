import React from 'react'
import { connect } from 'react-redux'
import Confetti from 'react-dom-confetti'

import PageLayout from './components/PageLayout'
import Heading from './components/Heading'
import FruitMachine from './components/FruitMachine'
import SpinResult from './components/SpinResult'

import { spinWheelRequest } from './actions'

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

export function App(props) {
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
      <SpinResult results={results} />
      <Confetti config={confettiConfig} active={isWin} />
    </PageLayout>
  )
}

export function mapStateToProps(state) {
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
