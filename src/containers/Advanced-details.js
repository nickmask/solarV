import React, { PropTypes, Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../actions/index.js'

require('../www/stylesheets/home')

class AdvancedOptions extends Component {
  constructor () {
    super()
    this.state = { }
  }

  render () {
    return (
      <div className='panel details'>
        <h2>Details</h2>
        <p className='advanced'><span className='glyphicon glyphicon-menu-down' aria-hidden='true'></span> Show advanced details</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedOptions)
