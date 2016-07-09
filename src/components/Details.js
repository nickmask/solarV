import React, { PropTypes, Component } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../actions/index.js'
import { Button } from 'react-toolbox/lib/button'

require('../www/stylesheets/home')

class Details extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='details'>
        <h2>Details</h2>
        <Button label='Show advanced details' raised accent onClick={this.handleToggle} />
        { this.state.active ? <Details /> : <div></div> }
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
