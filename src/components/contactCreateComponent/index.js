import React, {Component} from 'react'

import update from 'immutability-helper'
import './style.css'

export default class ContactCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.user = {
        name: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
        date: '',
        formValid: true
      },
      nameValid: false,
      emailValid: false,
      postcodeValid: false,
      dateValid: false,
      formValid: true
    };


    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changePostcode = this.changePostcode.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.updateState = this.updateState.bind(this)

    // this.clearState = this.clearState.bind(this)
    this.addPlate = this.addPlate.bind(this)
  }

  // clearState() {
  //   this.setState({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     address: '',
  //     postcode: '',
  //     date: '',
  //     formErrors: {
  //       name: '',
  //       email: '',
  //       postcode: '',
  //       date: '',
  //     },
  //     nameValid: false,
  //     emailValid: false,
  //     phoneValid: false,
  //     postcodeValid: false,
  //     dateValid: false,
  //     formValid: false
  //   });
  // }


  addPlate(e) {


    if (this.state.nameValid !== false && this.state.nameValid !== undefined
        && this.state.emailValid !== false && this.state.emailValid !== undefined
        && this.state.postcodeValid !== false && this.state.postcodeValid !== undefined
        && this.state.dateValid !== false && this.state.dateValid !== undefined){



      if (this.state.emailValid === true) {
        this.props.changeStateProps('email', this.state.email);
      } else {
        document.querySelector('.input__email').classList.add('input__error')
      }

      this.props.changeStateProps('phone', this.state.phone);
      this.props.changeStateProps('address', this.state.address);

      if (this.state.postcodeValid === true) {
        this.props.changeStateProps('postcode', this.state.postcode);
      } else {
        document.querySelector('.input__postcode').classList.add('input__error')
      }

      if (this.state.dateValid === true) {
        this.props.changeStateProps('date', this.state.date);
      } else {
        document.querySelector('.input__date').classList.add('input__error')
      }

      this.clearState()

    } else {

      if (this.state.nameValid === false || this.state.nameValid === undefined) {
        document.querySelector('.input__name').classList.add('input__error')
      }

      if (this.state.emailValid === false || this.state.emailValid === undefined) {
        document.querySelector('.input__email').classList.add('input__error')
      }

      if (this.state.postcodeValid === false || this.state.postcodeValid === undefined) {
        document.querySelector('.input__postcode').classList.add('input__error')
      }
      if (this.state.dateValid === false || this.state.dateValid === undefined) {
        document.querySelector('.input__date').classList.add('input__error')
      }


    }
  }

  componentDidMount() {
    console.log('props in component', this.props.user)
  }

  changeName(event) {

    this.setState({user: { name: event.target.value}});

    if (event.target.value.length > 2) {
      this.setState({nameValid: true});
    } else {
      this.setState({nameValid: false});
    }
  }


  changeEmail(event) {
    this.setState({user: { email: event.target.value}});

    if (event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null) {
      this.setState({emailValid: true});
    } else {
      this.setState({emailValid: false});
    }

  }

  changePhone(event) {
    if (event.target.value.match(/^[0-9]+$/) !== null) {
      this.setState({user: { phone: event.target.value}});
    }
  }

  changeAddress(event) {
    this.setState({user: { address: event.target.value}});
  }

  changePostcode(event) {

    this.setState({user: { postcode: event.target.value}});

    if (event.target.value.length >= 5 && event.target.value.length < 10) {

      this.setState({postcodeValid: true});
    } else {
       this.setState({postcodeValid: false});
    }
  }

  changeDate(event) {
    this.setState({user: { date: event.target.value}});

    if (event.target.value.match(/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/) !== null) {

      this.setState({dateValid: true});
    } else {
       this.setState({dateValid: false});
    }
  }
  updateState() {

    console.log(this.state.user);
    if (this.state.formValid &&
        this.state.nameValid && this.state.nameValid !== undefined
        && this.state.emailValid && this.state.emailValid !== undefined
        && this.state.postcodeValid  && this.state.postcodeValid !== undefined
        && this.state.dateValid && this.state.dateValid !== undefined) {

        this.props.changeStateProps('user', this.state.user)

    }

  }

  render() {

    let name = this.state.nameValid ? '' : 'input__error';
    let email = this.state.emailValid ? '' : 'input__error';
    let postcode = this.state.postcodeValid ? '' : 'input__error';
    let date = this.state.dateValid ? '' : 'input__error';

    return (

        <form className="plate">
          <label className='input__label'>Name :
            <input
                name="name"
                className={`input__name input__style ${name}`}
                type='text'
                onChange={this.changeName}
                placeholder='Name'
                value={this.state.user.name}
            />
          </label>

          <label className='input__label'>Email :
            <input
                className={`input__email input__style ${email}`}
                type='text'
                placeholder='Email'
                onChange={this.changeEmail}
                value={this.state.user.email}
            />
          </label>
          <label className='input__label'>Phone :
            <input
                className='input__phone input__style'
                type='text'
                name='phone'
                placeholder='Phone'
                onChange={this.changePhone}
                value={this.state.user.phone}
            />
          </label>
          <label className='input__label'>address :
            <input
                className='input__address input__style'
                type='text'
                name="address "
                placeholder='address '
                onChange={this.changeAddress}
                value={this.state.user.address}
            />
          </label>
          <label className='input__label'>Postcode :
            <input
                className={`input__postcode input__style ${postcode}`}
                type='text'
                name="postcode "
                placeholder='postcode  '
                onChange={this.changePostcode}
                value={this.state.user.postcode}
            />
          </label>
          <label className='input__label'>date of birth :
            <input
                className={`input__date input__style ${date}`}
                type="date"
                name="date_of_birth "
                placeholder='date of birth '
                onChange={this.changeDate}
                value={this.state.user.date}
            />
          </label>
          <div className="plate__footer">
            <div className="plate__footer-error">
              tis my error

            </div>
          </div>

        </form>
    )
  }
}


