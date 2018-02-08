import React, {Component} from 'react'
import './style.css'

export default class resultComponent extends Component {
  componentDidMount() {
    console.log('props in component', this.props)
  }

  render() {
       if(false){
    return (
        <div className="result">

          <h3>Result</h3>
          <label className='result__label'>Name :
          <p className='result__style'>{this.props.user.userName}</p>
          </label>
          <label className='result__label'>Email :
          <p className='result__style'>{ this.props.user.userEmail}</p>
          </label>
          <label className='result__label'>Phone :
          <p>{ this.props.someUserPhone}</p>
          </label>
          <label className='result__label'>Address :
          <p>{this.props.user.userAddres}</p>
          </label>
          <label className='result__label'>Postcode :
          <p>{this.props.user.userPostcode}</p>
          </label>
          <label className='result__label'>Date Of Birth :
          <p> {this.props.user.userDate}</p>
          </label>
        </div>
    )}else{
         return (
         <div> Loading...</div>
         )
       }
  }
}
