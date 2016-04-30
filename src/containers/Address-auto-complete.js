import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import Geosuggest from 'react-geosuggest'

export default class Testing extends Component {
  render () {
    return (
      <Col sm={4} panel>
        <h2>Address</h2>
        <div className='sideImages'>
          {this.props.build.map((bu, i) =>
            <Image key={i} src={`/images/${bu}.png`} alt={bu} responsive/>
          )}
        </div>
      </Col>
    )
  }
}

<div className='address col-md-4 col-sm-4 col-sm-offset-1 col-md-offset-1 panel'>
  <div>
    <div className='form-group'>
      <h2>Address</h2>
      <Geosuggest
         placeholder='Start typing!'
         initialValue='New Zealand'
         onSuggestSelect={this.onSuggestSelect}
         location={new google.maps.LatLng(53.558572, 9.9278215)}
         radius='20' />
    </div>
  </div>
</div>
