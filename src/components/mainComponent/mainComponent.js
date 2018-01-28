import React, { Component } from 'react'

import  './mainComponent.css'
import MainTitle from './../mainTitle/mainTitle'
import ContactCreate from './../contactCreateComponent/contactCreateComponent'
import SecondComponent from './../secondComponent/secondComponentContainer'


export default class MainComponent extends Component {
  render () {
    return (
        <div className='main'>
          <MainTitle />
          <ContactCreate testName='Test' />
          <SecondComponent />
        </div>
    )
  }
}


