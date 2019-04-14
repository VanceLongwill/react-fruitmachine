import { connect } from 'react-redux'
import { FruitMachine } from './FruitMachine'
import { spinWheelRequest } from '../../actions'

export function mapStateToProps(state) {
  return {
    isSpinning: state.fruitMachine.isSpinning,
    wheels: state.fruitMachine.wheels,
    isWin: state.fruitMachine.isWin,
    results: state.fruitMachine.results,
  }
}

const actionCreators = { spinWheelRequest }

export default connect(mapStateToProps, actionCreators)(FruitMachine)
