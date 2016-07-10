import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Details extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='details'>
        <p> Fancy advanced features BRA </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Details)
