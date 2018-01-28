import React, {Component} from 'react'

import  './mainComponent.css'
import MainTitle from './../mainTitle/mainTitle'
import ContactCreate from './../contactCreateComponent/contactCreateComponentContainer'
import SecondComponent from './../secondComponent/secondComponentContainer'


export default class MainComponent extends Component {
  render() {
    return (
        <div className='main'>
          <MainTitle />
          <div className="list">
            <ContactCreate testName='Test'/>
            <SecondComponent />
          </div>

        </div>
    )
  }
}


