import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        <div>
          {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
})
