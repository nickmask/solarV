import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import AddressInput from '../containers/Address-input'
import PowerInput from '../containers/Power-input'
import PowerOutput from '../containers/Power-output'
import AdvancedDetails from '../containers/Advanced-details'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
require('../www/stylesheets/home')

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
        <Col sm={12} className='panel'>
          <AdvancedDetails />
        </Col>
      </Row>
    )
  }
})
