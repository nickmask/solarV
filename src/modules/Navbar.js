import React from 'react'

var NavBrand = React.createClass({
  render: function(){
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    );
  }
});

var NavMenu = React.createClass({
  render: function(){
    var links = this.props.links.map(function(link){
      if(link.dropdown) {
        return (
          <NavLinkDropdown links={link.links} text={link.text} active={link.active} />
        );
      }
      else {
        return (
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
});

var NavLink = React.createClass({
  render: function(){
    return(
      <li className={(this.props.active ? "active" : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>
    );
  }
});

// set data
var navbar = {};
navbar.brand =
  {linkTo: "/", text: "Solar V"};
navbar.links = [
  {linkTo: "/", text: "Home"},
  {linkTo: "/why-solar", text: "Why solar?"},
  {linkTo: "/about-us", text: "Link 2"},
  {linkTo: "/get-in-touch", text: "Get in touch"},
]
