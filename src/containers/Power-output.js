import React, { PropTypes, Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../actions/index.js'

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
    console.log(this.props.sunlightHoursPerDay, this.props.kwUsagePerDay)
    if (this.props.sunlightHoursPerDay != undefined && this.props.kwUsagePerDay != undefined) {
      console.log('Kw first')
      const installKw = Math.round((this.props.kwUsagePerDay / this.props.sunlightHoursPerDay) * 100) / 100
      return installKw + ' kW'
    } else {
      console.log('kw second')
      return (<div></div>)
    }
  }

  installSize () {
    console.log(this.props.sunlightHoursPerDay, this.props.kwPerSqMeter)
    if (this.props.sunlightHoursPerDay != undefined && this.props.kwPerSqMeter != undefined) {
      console.log('size first')
      const kwPerDayPerSquareMeter = this.props.sunlightHoursPerDay * this.props.kwPerSqMeter
      const installMeters = Math.round(this.props.kwUsagePerDay / kwPerDayPerSquareMeter)
      return installMeters + ' (square meters)'
    } else {
      console.log('size second')
      return (<div></div>)
    }
  }

  render () {
    return (
      <div>
        <h2>Your recommended installation size</h2>
        <div>
        {!this.kwReady() && !this.sizeReady() && <h3>Update address</h3>}
        {this.kwReady() && this.sizeReady() && <div><h3>{this.installKw()}</h3><p>{this.installSize()}</p></div>}
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
