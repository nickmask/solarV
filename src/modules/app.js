import React from 'react'
import { Link } from 'react-router'
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
        <Navbar />
        {this.props.children || <Home/>}
      </div>
    )
  }
})
