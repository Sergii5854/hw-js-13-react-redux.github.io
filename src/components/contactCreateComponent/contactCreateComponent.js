import React, {Component} from 'react'


import './contactCreateComponent.css'

export default class ContactCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
      date: '',
    };


    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changePostcode = this.changePostcode.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changeDate = this.changeDate.bind(this)


    this.addPlate = this.addPlate.bind(this)
    this.clearPlate = this.clearPlate.bind(this)

  }

  clearPlate(e) {
    e.preventDefault()
    this.props.changeStateProps('name', '');
    this.props.changeStateProps('email', '');
    this.props.changeStateProps('phone', '');
    this.props.changeStateProps('address', '');
    this.props.changeStateProps('postcode', '');
    this.props.changeStateProps('date', '');



  }

  addPlate(e) {
    e.preventDefault()


   if(!!this.props.someUserName && typeof this.props.someUserName ==='string') {
     console.log( typeof this.props.someUserName ==='string' );
     this.props.changeStateProps('name', this.props.someUserName)
   }else{

   }

  }

  componentDidMount() {
    console.log('props in component', this.props)
  }

  changeName(event) {
    this.setState({name: event.name})
  }

  changeEmail({target: {value}}) {
    this.props.changeStateProps('email', value)
  }

  changePhone({target: {value}}) {
    this.props.changeStateProps('phone', value)
  }

  changeAddress({target: {value}}) {
    this.props.changeStateProps('address', value)
  }

  changePostcode({target: {value}}) {
    this.props.changeStateProps('postcode', value)
  }

  changeDate({target: {value}}) {
    this.props.changeStateProps('date', value)
  }

  render() {
    return (

        <form className="plate">
          <label className='input__label'>Name : </label>
          <input
              className='input__style'
              type='text'
              onChange={this.changeName}
              placeholder='Name'
              value={this.state.name}
          />

          <label className='input__label'>Email : </label>
          <input
              className='input__style'
              type='text'
              placeholder='Email'
              onChange={this.changeEmail}
              value={this.props.someUserEmail}
          />
          <label className='input__label'>Phone : </label>
          <input
              className='input__style'
              type='text'
              name='phone'
              placeholder='Phone'
              onChange={this.changePhone}
              value={this.props.someUserPhone}
          />

          <label className='input__label'>address : </label>
          <input
              className='input__style'
              type='text'
              name="address "
              placeholder='address '
              onChange={this.changeAddress}
              value={this.props.someUserAddress}
          />

          <label className='input__label'>Postcode : </label>
          <input
              className='input__style'
              type='text'
              name="postcode "
              placeholder='postcode  '
              onChange={this.changePostcode}
              value={this.props.someUserPostcode}
          />

          <label className='input__label'>date of birth : </label>
          <input
              className='input__style'
              type="date"
              name="date_of_birth "
              placeholder='date of birth '
              onChange={this.changeDate}
              value={this.props.someUserDate}
          />
          <footer className="plate__footer">
            <button
                onClick={this.addPlate}
                className="button button__add">
            </button>
            <button
                onClick={this.clearPlate}
                className="button button__clear">
            </button>
          </footer>

        </form>
    )
  }
}
