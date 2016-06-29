import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid/lib/index'
import Navbar from './Navbar'
import Home from './Home'
require('../../www/stylesheets/main')

class App extends Component {

  render () {
    return (
      <div>
        <Navbar />
        <Grid className='main'>
          {this.props.children || <Home/>}
        </Grid>
      </div>
    )
  }
}

export default App
