import React, { PropTypes, Component } from 'react'
import Slider from 'react-toolbox/lib/slider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPower } from '../actions/index.js'

class PowerInput extends Component {
  constructor (props) {
    super(props)
    this.state = { power: 400, solar: [{electPricePerKw: 0.28859}, {solarPanelEfficency: 0.2}, {RawkwPerSquareMeter: 1}] }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.setState({ kwUsagePerDay: Math.round(((this.state.power / this.state.solar[0].electPricePerKw) / 30.4) * 100) / 100 })
    this.setState({ kwPerSqMeter: (this.state.solar[1].solarPanelEfficency / this.state.solar[2].RawkwPerSquareMeter) })
  }

  handleChange (slider, value) {
    const { dispatch, addPower } = this.props
    const newState = {}
    newState[slider] = value
    this.setState(newState)
    this.setState({ kwUsagePerDay: Math.round(((this.state.power / this.state.solar[0].electPricePerKw) / 30.4) * 100) / 100 })
    this.setState({ kwPerSqMeter: (this.state.solar[1].solarPanelEfficency / this.state.solar[2].RawkwPerSquareMeter) })
    dispatch(addPower(this.state))
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
          <h2 className='powerOutput'>{this.state.power}</h2>
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
