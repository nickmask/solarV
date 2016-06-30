import React, { PropTypes, Component } from 'react'
import Slider from 'react-toolbox/lib/slider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPower } from '../actions/index.js'

class PowerInput extends Component {
  constructor () {
    super()
    this.state = { power: 400 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (slider, value) {
    const { dispatch, addPower } = this.props
    const newState = {}
    newState[slider] = value
    this.setState(newState)
    dispatch(addPower(this.state.power))
  }

  render () {
    return (
      <div>
        <h2>Power usage</h2>
        <div >
          <label>
            Please enter your average monthly electricity bill cost:
          </label>
          <Slider min={50} max={800} step={10} value={this.state.power} onChange={this.handleChange.bind(this, 'power')} />
          <h2 className='powerOutput'>${this.state.power}</h2>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { power: state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addPower }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerInput)
