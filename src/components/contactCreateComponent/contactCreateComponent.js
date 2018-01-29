import React, {Component} from 'react'


import './contactCreateComponent.css'

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
clearState(){
  this.setState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    date: '',
  });
}

  clearPlate(e) {
    e.preventDefault()
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

    this.props.changeStateProps('name', this.state.name);
    this.props.changeStateProps('email', this.state.email);
    this.props.changeStateProps('phone', this.state.phone);
    this.props.changeStateProps('address', this.state.address);
    this.props.changeStateProps('postcode', this.state.postcode);
    this.props.changeStateProps('date', this.state.date);


    this.clearState()
  }

  componentDidMount() {
    console.log('props in component', this.props)
  }

  changeName(event) {  
    this.setState({name: event.target.value});
  }

  changeEmail(event) {
    this.setState({email: event.target.value});
  }

  changePhone(event) {
    // this.props.changeStateProps('phone', value)
    this.setState({phone: event.target.value});
  }

  changeAddress(event) {
    // this.props.changeStateProps('address', value)
    this.setState({address: event.target.value});
  }

  changePostcode(event) {
    // this.props.changeStateProps('postcode', value)
    this.setState({postcode: event.target.value});
  }

  changeDate(event) {
    // this.props.changeStateProps('date', value)
    this.setState({date: event.target.value});
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
              value={this.state.email}
          />
          <label className='input__label'>Phone : </label>
          <input
              className='input__style'
              type='text'
              name='phone'
              placeholder='Phone'
              onChange={this.changePhone}
              value={this.state.phone}
          />

          <label className='input__label'>address : </label>
          <input
              className='input__style'
              type='text'
              name="address "
              placeholder='address '
              onChange={this.changeAddress}
              value={this.state.address}
          />

          <label className='input__label'>Postcode : </label>
          <input
              className='input__style'
              type='text'
              name="postcode "
              placeholder='postcode  '
              onChange={this.changePostcode}
              value={this.state.postcode}
          />

          <label className='input__label'>date of birth : </label>
          <input
              className='input__style'
              type="date"
              name="date_of_birth "
              placeholder='date of birth '
              onChange={this.changeDate}
              value={this.state.date}
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
