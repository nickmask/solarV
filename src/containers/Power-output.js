import React, { PropTypes, Component } from 'react'
import { Col } from 'react-bootstrap'
import Slider from 'react-toolbox/lib/slider'


export default class PowerOutput extends Component {

  render () {
    return (
      <div>
        <h2>Your recommended installation size</h2>
        <div>
          <h3>KW usage</h3>
          <p>Square meters</p>
        </div>
      </div>
    )
  }
}
