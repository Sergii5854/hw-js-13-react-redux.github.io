import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import ContactCreate from './index'

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  return {
    someUserName: state.main.name,
    someUserEmail: state.main.email,
    someUserPhone: state.main.phone,
    someUserAddres: state.main.address,
    someUserPostcode: state.main.postcode,
    someUserDate: state.main.date,
    isUserEqual: state.main.name === ownProps.testName,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateProps: (prop, value) => {
      dispatch(changeStateProps(prop, value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ContactCreate)
