import React from 'react'
import { Col } from 'react-bootstrap'

export default React.createClass({
  render: function () {
  return (
    <Col sm={4} smOffset={1} className='sunlightHours panel'>
      <h2>Hours of sunlight avaliable</h2>
      <div className="sunlight">
        <div><img src='/images/sun.png' className="sun" /></div>
        <div className='hours'> {this.props.sunlightHours}</div>
      </div>
      <p>Based on regional weather patterns</p>
    </Col>
  )
  }
})
