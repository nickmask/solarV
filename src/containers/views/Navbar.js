import React, { Component, PropTypes } from 'react'
import Navlink from '../Navlink'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import { Row } from 'react-foundation'


class NavMenu extends Component {

  render () {
    return (
      <Row>
        <AppBar fixed flat>
        </AppBar>
      </Row>
    )
  }
}

export default NavMenu
