import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'
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
