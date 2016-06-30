import React, { PropTypes, Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../actions/index.js'


const electPricePerKw = 0.28859
const solarPanelEfficency = 0.2
const kwPerSquareMeter = 1

class PowerOutput extends Component {

  // size



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

function mapStateToProps (state) {
  return { power: state, address: state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addAddress }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerOutput)
