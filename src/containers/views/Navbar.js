import React, { Component, PropTypes } from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'

class NavMenu extends Component {

  render () {
    return (
      <AppBar fixed flat>
        <a href='/'>React Toolbox Docs</a>
        <Navigation />
      </AppBar>
    )
  }
}

export default NavMenu
