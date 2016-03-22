import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import '../stylesheets/modules/navigation'

export default React.createClass({
  render() {
    return (
      <nav className="uk-navbar uk-navbar-attached">
        <a className="uk-navbar-brand" href="/">Solar V</a>
        <div className='uk-navbar-flip'>
          <ul className='uk-navbar-nav uk-hidden-small'>
            <li><Link to="/" activeClassName="uk-active" onlyActiveOnIndex>Home</Link></li>
            <li><NavLink to="/why-solar">Why Solar</NavLink></li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            <li><NavLink to="/get-in-touch">Get in touch</NavLink></li>
            <a href="#my-id" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
          </ul>
        </div>
      </nav>

    )
  }
})
