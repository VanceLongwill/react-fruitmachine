import { connect } from 'react-redux'
import { FruitMachine } from './FruitMachine'
import { spinWheel } from '../../actions'

export function mapStateToProps(state) {
  return {
    wheels: state.fruitMachine.wheels,
  }
}

const actionCreators = { spinWheel }

export default connect(mapStateToProps, actionCreators)(FruitMachine)
