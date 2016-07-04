import React, { Component } from 'react'
import Navbar from './views/Navbar'
import Home from './views/Home'
import Footer from './views/Footer'
import { Grid } from 'react-bootstrap'
require('../www/stylesheets/main')

class App extends Component {

  render () {
    return (
      <div>
        <Navbar />
        <Grid>
          {this.props.children || <Home/>}
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
