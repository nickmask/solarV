import React from 'react'

export default React.createClass({
  render: function () {
  return (
    <div className='sunlightHours col-md-4 col-sm-6 col-sm-offset-1 col-md-offset-1 card panel'>
      <h2>Hours of sunlight per year</h2>
      <div id="sunlight">
        <i className="fa fa-sun-o fa-4x"><span className="hours"> {this.props.sunlightHours}</span></i>
      </div>
    </div>
  )
  }
})
