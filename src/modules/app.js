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
        <Navbar className='navbar' inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Solar V</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className='navbar-collapse'>
            <Nav pullRight>
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link></li>
                <li><NavLink to="/why-solar">Why Solar</NavLink></li>
                <li><NavLink to="/about-us">About us</NavLink></li>
                <li><NavLink to="/get-in-touch">Get in touch</NavLink></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
//
// <div>
//   <h1>Solar V</h1>
//   <div class='row'>
//     <Navbar inverse>
//       <ul>
//         <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link></li>
//         <li><NavLink to="/why-solar">Why Solar</NavLink></li>
//         <li><NavLink to="/about-us">About us</NavLink></li>
//         <li><NavLink to="/get-in-touch">Get in touch</NavLink></li>
//       </ul>
//     </Navbar>
//   </div>
//   {this.props.children || <Home/>}
// </div>
