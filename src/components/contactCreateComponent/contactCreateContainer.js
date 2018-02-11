import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import ContactCreate from './index'

const mapStateToProps = (state, ownProps) => {

  return {
    user: state.main.user,
    showResult: state.main.showResult,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateProps: (prop, value) => {
      dispatch(changeStateProps(prop, value))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ContactCreate)
