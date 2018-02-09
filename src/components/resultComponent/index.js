import React, {Component} from 'react'
import './style.css'

export default class resultComponent extends Component {
  componentDidMount() {
    console.log('props in component', this.props)
  }

  render() {
    // console.log(this.props.user.formValid);
    if(false){
    return (
        <div className="result">

          <h3>Result</h3>
          <label className='result__label'>Name :
          <p className='result__style'>{this.props.user.name}</p>
          </label>
          <label className='result__label'>Email :
          <p className='result__style'>{ this.props.user.email}</p>
          </label>
          <label className='result__label'>Phone :
          <p>{ this.props.phone}</p>
          </label>
          <label className='result__label'>Address :
          <p>{this.props.user.address}</p>
          </label>
          <label className='result__label'>Postcode :
          <p>{this.props.user.postcode}</p>
          </label>
          <label className='result__label'>Date Of Birth :
          <p> {this.props.user.date}</p>
          </label>
        </div>
    )}else{
         return (
         <div> Loading...</div>
         )
       }
  }
}
