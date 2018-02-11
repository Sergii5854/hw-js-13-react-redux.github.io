import { connect } from 'react-redux'
import resultComponent from './index'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.main.user,
    showResult: state.main.showResult
  }
}

export default connect(
  mapStateToProps)(resultComponent)
