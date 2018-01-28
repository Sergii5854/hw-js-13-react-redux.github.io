import React, { Component } from 'react'


import './contactCreateComponent.css'

export default class contactCreate extends Component {
  constructor (props) {
    super(props)
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount () {
    console.log('props in component', this.props)
  }
  changeName ({target: {value}}) {
    this.props.changeStateProps('name', value)
  }
  render () {
    return (
    <form >
      <div className="item">
        <label className='input__label'>Name : </label>
        <input
            className='input__style'
            type='text'

            onChange={this.changeName}
            placeholder='Name'
        />
        <label className='input__label'>Email : </label>
        <input
            className='input__style'
            type='text'
            placeholder='Email'
        />
        <label className='input__label'>Phone : </label>
        <input
            className='input__style'
            type='text'
            name='phone'
            placeholder='Phone'
        />
        <label className='input__label'>address  : </label>
        <input
            className='input__style'
            type='text'
            name="address "
            placeholder='address '
        />
        <label className='input__label'>Postcode   : </label>
        <input
            className='input__style'
            type='text'
            name="postcode "
            placeholder='postcode  '
        />
        <label className='input__label'>date of birth   : </label>
        <input
            className='input__style'
            type="date"
            name="date_of_birth "

            placeholder='date of birth '
        />
      </div>
    </form>
    )
  }
}
