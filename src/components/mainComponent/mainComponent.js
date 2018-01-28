import React, { Component } from 'react'

import  './mainComponent.css'
import MainTitle from './../mainTitle/mainTitle'
import ContactCreate from './../contactCreateComponent/contactCreateComponentContainer'
import SecondComponent from './../secondComponent/secondComponentContainer'


import Test from './../test-component/testComponentContainer'

export default class MainComponent extends Component {
  render () {
    return (
        <div className='main'>
          <MainTitle />
          <ContactCreate testName='Test' />
          <SecondComponent />
          <Test />
        </div>
    )
  }
}


