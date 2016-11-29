import React, { Component, PropTypes } from 'react'
import NavLink from '../containers/Navlink'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import { Row } from 'react-foundation'
import { Button } from 'react-toolbox/lib/button'
import Link from 'react-toolbox/lib/link'

class NavMenu extends Component {

  render () {
    return (
      <Row>
        <AppBar fixed flat>
          <Navigation>
            <Button label='Home' ><NavLink to='/home'></NavLink></Button>
            <Button label='Why Solar' ><NavLink to='/why-solor'></NavLink></Button>
            <Button label='About Us' ><NavLink to='/about-us'></NavLink></Button>
            <Button label='Contact Us' ><NavLink to='/contact-us'></NavLink></Button>
          </Navigation>
        </AppBar>
      </Row>
    )
  }
}

export default NavMenu
