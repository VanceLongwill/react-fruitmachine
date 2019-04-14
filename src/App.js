import React from 'react'
import { connect } from 'react-redux'

import PageLayout from './components/PageLayout'
import FruitMachine from './components/FruitMachine'
import SpinResult from './components/SpinResult'

import { spinWheelRequest } from './actions'

export function App(props) {
  const {
    isSpinning,
    wheels,
    isWin,
    results,
    handleSpin,
  } = props;
  return (
    <PageLayout>
      <FruitMachine 
        isSpinning={isSpinning}
        wheels={wheels}
        isWin={isWin}
        onSpin={handleSpin} />
      <SpinResult results={results} />
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

export default connect(mapStateToProps, actionCreators)(App)
