import React from 'react'
import $ from 'jquery'
import path from 'path'
import request from 'superagent'

export default React.createClass({
  render: function () {
  return (
    <div className='sunlightHours'>
      <h2>Hours of sunlight per year</h2>
      <span>{this.props.sunlightHours}</span>
    </div>
  )
  }
})
