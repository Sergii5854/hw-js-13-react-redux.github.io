import React, {Component} from 'react'
import update from "immutability-helper"
import './style.css'

export default class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
      date: '',

      nameValid: false,
      emailValid: false,
      postcodeValid: false,
      dateValid: false,

      errorsName: '',
      errorsEmail: '',
      errorsPostcode: '',
      errorsDate: ''
    };

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changePostcode = this.changePostcode.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    console.log('props in component create', this.props)
  }

  changeName(event) {
    this.updateState()
    this.setState({name: event.target.value});
    if (event.target.value.length > 2) {
      this.setState({
        nameValid: true,
        errorsName: ''
      });
    } else {
      this.setState({
        nameValid: false,
        errorsName: 'Your name should be more long'
      });
    }
  }


  changeEmail(event) {
    this.updateState()
    this.setState({email: event.target.value});
    if (event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null) {
      this.setState({
        emailValid: true,
        errorsEmail: ''
      });
    } else {
      this.setState({
        emailValid: false,
        errorsEmail: 'This is not email'
      });
    }
      }

  changePhone(event) {
    this.updateState()
    this.setState({phone: event.target.value});
  }

  changeAddress(event) {
    this.updateState()
    this.setState({address: event.target.value});
  }

  changePostcode(event) {
    this.updateState()
    this.setState({postcode: event.target.value});

    if (event.target.value.length >= 5 && event.target.value.length <= 10) {
      this.setState({
        postcodeValid: true,
        errorsPostcode: ''
      });
    } else {
      this.setState({
        postcodeValid: false,
        errorsPostcode: 'Postcode should be from 5 to 10 symbols'
      });
    }
  }

  changeDate(event) {
    this.updateState()
    this.setState({date: event.target.value});

    if (!!event.target.value) {
      this.setState({
        dateValid: true,
        errorsDate: ''
      });
    } else {
      this.setState({
        dateValid: false,
        errorsDate: 'Not valid format of Date'
      });
    }
  }


  updateState() {
    this.props.changeStateProps('showResult', false);

    if (this.state.nameValid && this.state.emailValid && this.state.postcodeValid && this.state.dateValid) {

      const objUser = {
        name: this.state.name,
        email: this.state.email,
        date: this.state.date,
        postcode: this.state.postcode,
        phone: this.state.phone,
        address: this.state.address
      };
      this.props.changeStateProps('user', objUser);
      this.props.changeStateProps('showResult', true);
    }
  }


  render() {
    let name = this.props.user
        ? this.state.nameValid ? '' : 'input__error'
        : '';
    let email = this.props.user
        ? this.state.emailValid ? '' : 'input__error'
        : '';
    let postcode = this.props.user
        ? this.state.postcodeValid ? '' : 'input__error'
        : '';
    let date = this.props.user
        ? this.state.dateValid ? '' : 'input__error'
        : '';

    return (

        <form className="plate">
          <label className='input__label'>Name :
            <input
                name="name"
                className={`input__name input__style ${name}`}
                type='text'
                onChange={this.changeName}
                placeholder='Name'
                value={this.state.name}
            />
            <p className="input__errors-info"> {this.state.errorsName}</p>
          </label>
          <label className='input__label'>Email :
            <input
                className={`input__email input__style ${email}`}
                type='text'
                placeholder='Email'
                onChange={this.changeEmail}
                value={this.state.email}
            />
            <p className="input__errors-info">{this.state.errorsEmail}</p>
          </label>
          <label className='input__label'>date of birth :
            <input
                className={`input__date input__style ${date}`}
                type="date"
                pattern="\d{1,2}/\d{1,2}/\d{4}"
                name="date_of_birth "
                placeholder='date of birth '
                onChange={this.changeDate}
                value={this.state.date}
            />

            <p className="input__errors-info">  {this.state.errorsDate}</p>
          </label>
          <label className='input__label'>Postcode :
            <input
                className={`input__postcode input__style ${postcode}`}
                type='text'
                name="postcode "
                placeholder='postcode  '
                onChange={this.changePostcode}
                value={this.state.postcode}
            />
            <p className="input__errors-info"> {this.state.errorsPostcode}</p>
          </label>
          <label className='input__label'>Phone :
            <input
                className='input__phone input__style'
                type='text'
                name='phone'
                placeholder='Phone'
                onChange={this.changePhone}
                value={this.state.phone}
            />
          </label>
          <label className='input__label'>address :
            <input
                className='input__address input__style'
                type='text'
                name="address "
                placeholder='address '
                onChange={this.changeAddress}
                value={this.state.address}
            />
          </label>
        </form>
    )
  }
}


