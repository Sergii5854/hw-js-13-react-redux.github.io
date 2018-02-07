import React, {Component} from 'react'


import './style.css'

export default class ContactCreate extends Component {
  constructor(props) {
    super(props)
    this.reset = {}
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
      date: '',

      nameValid: false,
      emailValid: false,
      phoneValid: false,
      postcodeValid: false,
      dateValid: false,
      formValid: false
    };


    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changePostcode = this.changePostcode.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changeDate = this.changeDate.bind(this)


    this.addPlate = this.addPlate.bind(this)
    this.clearPlate = this.clearPlate.bind(this)
    this.clearState = this.clearState.bind(this)

  }

  clearState() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      address: '',
      postcode: '',
      date: '',
      formErrors: {
        name: '',
        email: '',
        postcode: '',
        date: '',
      },
      nameValid: false,
      emailValid: false,
      phoneValid: false,
      postcodeValid: false,
      dateValid: false,
      formValid: false
    });
  }

  clearPlate(e) {
    e.preventDefault();
    this.props.changeStateProps('name', '');
    this.props.changeStateProps('email', '');
    this.props.changeStateProps('phone', '');
    this.props.changeStateProps('address', '');
    this.props.changeStateProps('postcode', '');
    this.props.changeStateProps('date', '');

    this.clearState()

  }

  addPlate(e) {
    e.preventDefault()

    document.querySelectorAll('.input__style').forEach((item) => {
      item.classList.remove('input__error')
    });

    if (this.state.nameValid !== false && this.state.nameValid !== undefined
        && this.state.emailValid !== false && this.state.emailValid !== undefined
        && this.state.postcodeValid !== false && this.state.postcodeValid !== undefined
        && this.state.dateValid !== false && this.state.dateValid !== undefined){

      if (this.state.nameValid === true) {
        this.props.changeStateProps('name', this.state.name);
      } else {
        document.querySelector('.input__name').classList.add('input__error')
      }

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
    // console.log('props in component', this.props)
  }

  changeName(event) {
    this.setState({name: event.target.value});

    if (event.target.value.length > 2) {
      this.setState({nameValid: true});
    } else {
      this.setState({nameValid: false});
    }
  }

  changeEmail(event) {
    this.setState({email: event.target.value});

    if (event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null) {
      this.setState({emailValid: true});
    } else {
      this.setState({emailValid: false});
    }
  }

  changePhone(event) {
    if (event.target.value.match(/^[0-9]+$/) !== null) {
      this.setState({phone: event.target.value});
    }
  }

  changeAddress(event) {
    this.setState({address: event.target.value});
  }

  changePostcode(event) {

    this.setState({postcode: event.target.value});

    if (event.target.value.length >= 5 && event.target.value.length < 10) {
      this.setState({postcodeValid: true});
    } else {
       this.setState({postcodeValid: false});
    }
  }

  changeDate(event) {

    this.setState({date: event.target.value});

    if (event.target.value.match(/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/)) {
      this.setState({dateValid: true});
    } else {
       this.setState({dateValid: false});
    }
  }

  render() {
    return (

        <form className="plate">
          <label className='input__label'>Name :
          <input

              className='input__name input__style'
              type='text'
              onChange={this.changeName}
              placeholder='Name'
              value={this.state.name}
          />
          </label>

          <label className='input__label'>Email :
          <input
              className=' input__email input__style'
              type='text'
              placeholder='Email'
              onChange={this.changeEmail}
              value={this.state.email}
          />
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
          <label className='input__label'>Postcode :
          <input
              className='input__postcode input__style'
              type='text'
              name="postcode "
              placeholder='postcode  '
              onChange={this.changePostcode}
              value={this.state.postcode}
          />
          </label>
          <label className='input__label'>date of birth :
          <input
              className='input__date input__style'
              type="date"
              name="date_of_birth "
              placeholder='date of birth '
              onChange={this.changeDate}
              value={this.state.date}
          />
          </label>
          <div className="plate__footer">
            <button
                onClick={this.addPlate}
                className="button button__add">
            </button>
            <button
                onClick={this.clearPlate}
                className="button button__clear">
            </button>
          </div>

        </form>
    )
  }
}


