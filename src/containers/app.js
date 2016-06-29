import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './views/Home'
import { Grid } from 'react-bootstrap'
require('../../www/stylesheets/main')

class App extends Component {

  render () {
    return (
      <div>
        <Navbar />
        <Grid>
          {this.props.children || <Home/>}
        </Grid>
      </div>
    )
  }
}

export default App
