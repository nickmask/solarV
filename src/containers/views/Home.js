import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddressInput from '../Address-input'
import PowerInput from '../Power-input'
import PowerOutput from '../Power-output'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

require('../../www/stylesheets/home')

export default React.createClass({
  render() {
    return (
      <Row>
        <Col sm={6} smOffset={3} className='panel'>
          <AddressInput />
        </Col>
        <Col sm={6} smOffset={3} className='panel'>
          <PowerInput />
        </Col>
        <Col sm={6} smOffset={3} className='panel'>
          <PowerOutput />
        </Col>
      </Row>
    )
  }
})
