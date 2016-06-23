import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'

class App extends Component {

  render () {
    return (
      <div className='section'>
        <Navbar/>
        <div className='main'>
          {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
}

export default App
