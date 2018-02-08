import { connect } from 'react-redux'
import SecondComponent from './index'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.main.user
  }
}

export default connect(
  mapStateToProps)(resultComponent)
