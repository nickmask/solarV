
import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import NavLink from './NavLinks'
import classNames from 'classnames'
require('../www/stylesheets/nav.sass')

class NavMenu extends Component {

  render () {
    const mobileClasses = classNames('mobileDiv', this.state.expanded)
    return (
      <div className='nav navbar-fixed-top'>
        <div className='container'>
          <Row >
            <Col sm={5} >
              <h1>Solar V</h1>
            </Col>
            <Col sm={7}>
              <div >
                <ul>
                  <li><IndexLink activeClassName='active' to='/'>{'HOME'}</IndexLink></li>
                  <li><NavLink to='/why-solor'>{'PROJECTS'}</NavLink></li>
                  <li><NavLink to='/about-us'>{'BLOG'}</NavLink></li>
                  <li><NavLink to='/get-in-touch'>{'ABOUT'}</NavLink></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default NavMenu
