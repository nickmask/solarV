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

  installKw () {
    console.log(this.props.sunlightHoursPerDay)
    if (this.props.sunlightHoursPerDay != '' && this.props.kwUsagePerDay != '') {
      console.log('Kw first')
      const installKw = Math.round((this.props.kwUsagePerDay / this.props.sunlightHoursPerDay) * 100) / 100
      return installKw + ' kW'
    } else {
      console.log('kw second')
      return (<div></div>)
    }
  }

  installSize () {
    if (this.props.sunlightHoursPerDay != '' && this.props.kwPerSqMeter != '') {
      console.log('size first')
      const kwPerDayPerSquareMeter = this.props.sunlightHoursPerDay * this.props.kwPerSqMeter
      const installMeters = Math.round(this.props.kwUsagePerDay / kwPerDayPerSquareMeter)
      return installMeters + ' (square meters)'
    } else {
      console.log('size second')
      return (<div></div>)
    }
  }

  blah () {
    this.setState({ kwPerDayPerSquareMeter: this.state.sunlightHoursPerDay * this.state.kwPerSqMeter })
    this.setState({ installSizeMeter: Math.round(this.state.kwUsagePerDay / this.state.kwPerDayPerSquareMeter)})
  }

  render () {
    return (
      <div>
        <h2>Your recommended installation size</h2>
        <div>
          <h3>KW usage: {this.installKw()}</h3>
          <p>{this.installSize()}</p>
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
