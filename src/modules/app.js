import React from 'react'
import { Link } from 'react-router'
import Navigation from './Navigation'
import NavLink from './NavLink'
import Home from './Home'
import WhySolar from './Why-solar'
import AboutUs from './About-us'
import GetInTouch from './Get-in-touch'
import { Navbar, Nav } from 'react-bootstrap'

export default React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children || <Home/>}
      </div>
    )
  }
})
