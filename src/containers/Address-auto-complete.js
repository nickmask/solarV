import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import Geosuggest from 'react-geosuggest'

export default class Testing extends Component {
  render () {
    return (
      <Col sm={4} panel>
        <h2>Address</h2>
        <Geosuggest
        placeholder='Start typing!'
        initialValue='Hamburg'
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radis='20' />
      </Col>
    )
  }
}
