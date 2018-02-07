import React, {Component} from 'react'
import './style.css'

export default class Test extends Component {
  componentDidMount() {
    console.log('props in component', this.props)
  }

  render() {
    return (
        <div className="result">
          <h3>Result</h3>
          <label className='result__label'>Name : </label>
          <p className='result__style'>{this.props.someUserName}</p>
          <label className='result__label'>Email : </label>
          <p className='result__style'>{ this.props.someUserEmail}</p>
          <label className='result__label'>Phone : </label>
          <p>{ this.props.someUserPhone}</p>
          <label className='result__label'>Address :</label>
          <p>{this.props.someUserAddres}</p>
          <label className='result__label'>Postcode : </label>
          <p>{this.props.someUserPostcode}</p>
          <label className='result__label'>Date Of Birth :</label>
          <p> {this.props.someUserDate}</p>
        </div>
    )
  }
}
