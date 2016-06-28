import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

export default React.createClass({
  render() {
    const green = {backgroundColor: 'green'}
    const red = {backgroundColor: 'red'}
    const blue = {backgroundColor: 'blue'}
    const yellow = {backgroundColor: 'yellow'}
    return (
      <Row>
        <Col md={4} style={green}>Green</Col>
        <Col md={4} style={red}>Red</Col>
        <Col md={4} style={blue}>Blue</Col>
        <Col md={12} style={yellow}>yellow</Col>
      </Row>
    )
  }
})
