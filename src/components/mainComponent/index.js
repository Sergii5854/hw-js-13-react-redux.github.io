import React, {Component} from 'react'

import  './style.css'
import MainTitle from './../mainTitle/index'
import ContactCreate from './../contactCreateComponent/indexContainer'
import ResultComponent from './../resultComponent/indexContainer'


export default class MainComponent extends Component {
  render() {
    return (
        <div className='main'>
          <MainTitle />
          <div className="list">
            <ContactCreate testName='Test'/>
            <ResultComponent />
          </div>

        </div>
    )
  }
}


