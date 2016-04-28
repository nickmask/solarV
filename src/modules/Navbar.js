import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import NavLink from './NavLinks'
import classNames from 'classnames'
import { Navbar, Nav } from 'react-bootstrap'

class Navbar extends Component {

  render () {
    return (
      <Navbar className='navbar' inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Solar V</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className='navbar-collapse'>
          <Nav pullRight>
            <li><IndexLink to='/' activeClassName='active' onlyActiveOnIndex>Home</IndexLink></li>
            <li><NavLink to='/why-solar'>Why Solar</NavLink></li>
            <li><NavLink to='/about-us'>About us</NavLink></li>
            <li><NavLink to='/get-in-touch'>Get in touch</NavLink></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navbar
