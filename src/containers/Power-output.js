import React, { PropTypes, Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../actions/index.js'

require('../www/stylesheets/home')

class PowerOutput extends Component {
  constructor () {
    super()
    this.state = { installKw: '', installMeters: 2110.3 }
  }

  kwReady () {
    if (this.props.sunlightHoursPerDay != undefined && this.props.kwUsagePerDay != undefined) {
      return true
    } else {
      return false
    }
  }

  sizeReady () {
    if (this.props.sunlightHoursPerDay != undefined && this.props.kwPerSqMeter != undefined) {
      return true
    } else {
      return false
    }
  }

  installKw () {
    const installKw = Math.round((this.props.kwUsagePerDay / this.props.sunlightHoursPerDay) * 100) / 100
    return installKw + ' kW'
  }

  installSize () {
    const kwPerDayPerSquareMeter = this.props.sunlightHoursPerDay * this.props.kwPerSqMeter
    const installMeters = Math.round(this.props.kwUsagePerDay / kwPerDayPerSquareMeter)
    return installMeters + ' (square meters)'
  }

  render () {
    return (
      <div>
        <h2>Your recommended installation size</h2>
        <div>
        {!this.kwReady() && !this.sizeReady() && <div className='install'><h3>Update address</h3></div>}
        {this.kwReady() && this.sizeReady() && <div className='install'><h3>{this.installKw()}</h3><p>{this.installSize()}</p></div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { kwPerSqMeter: state.user.power.kwPerSqMeter, kwUsagePerDay: state.user.power.kwUsagePerDay, sunlightHoursPerDay: state.user.details.sunlightHoursPerDay }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addAddress }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerOutput)
