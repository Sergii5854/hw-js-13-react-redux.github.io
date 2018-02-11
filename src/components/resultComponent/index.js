import React, {Component} from 'react'
import './style.css'

export default class resultComponent extends Component {
  componentDidMount() {
     console.log('props in component result', this.props)
  }

  render() {

     console.log("user result",this.props, this.props.showResult);
    if(this.props.showResult ){
    return (
        <div className="result">

          <h3>Result</h3>
          <label className='result__label'>Name :
          <p className='result__style'>{this.props.user.name}</p>
          </label>
          <label className='result__label'>Email :
          <p className='result__style'>{ this.props.user.email}</p>
          </label>
          <label className='result__label'>Date Of Birth :
            <p> {this.props.user.date}</p>
          </label>
          <label className='result__label'>Postcode :
            <p>{this.props.user.postcode}</p>
          </label>
          <label className='result__label'>Phone :
          <p>{ this.props.user.phone}</p>
          </label>
          <label className='result__label'>Address :
          <p>{this.props.user.address}</p>
          </label>

        </div>
    )}else{
         return (
         <div> Loading...</div>
         )
       }
  }
}
