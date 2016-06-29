import React, { PropTypes, Component } from 'react'
import { Col } from 'react-bootstrap'
import Slider from 'react-toolbox/lib/slider'


export default class PowerInput extends Component {
  constructor () {
    super()
    this.state = { powerUsage: 400 }
  }

  handleChange (slider, value) {
    const newState = {}
    newState[slider] = value
    this.setState(newState)
  };

  render () {
    return (
      <div>
        <h2>Power usage</h2>
        <div >
          <label>
            Please enter your average monthly electricity bill cost:
          </label>
          <Slider min={50} max={800} step={10} value={this.state.powerUsage} onChange={this.handleChange.bind(this, 'powerUsage')} />
          <h2 className='powerOutput'>${this.state.powerUsage}</h2>
        </div>
      </div>
    )
  }
}
