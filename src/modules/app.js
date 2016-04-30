import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import Navbar from './Navbar'
import Home from './Home'

class App extends Component {

  render () {
    return (
      <div className='section'>
        <Navbar/>
        <Grid className='main'>
          {this.props.children || <Home/>}
        </Grid>
      </div>
    )
  }
}

export default App
