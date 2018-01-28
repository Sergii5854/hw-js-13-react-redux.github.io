import React, {Component} from 'react'

export default class Test extends Component {
  componentDidMount() {
    console.log('props in component', this.props)
  }

  render() {
    return (
        <div>
          <p>{this.props.someUserName}</p>
          <p>{ this.props.someUserEmail}</p>
          <p>{ this.props.someUserPhone}</p>
          <p>{this.props.someUserAddres}</p>
          <p>{this.props.someUserPostcode}</p>
          <p> {this.props.someUserDate}</p>
        </div>
    )
  }
}
