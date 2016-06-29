import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import { GoogleMap, GoogleMapLoader, Marker, SearchBox } from "react-google-maps"
import Input from 'react-toolbox/lib/input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../actions/index.js'


class AddressInput extends Component {
  constructor () {
    super()
    this.state = { address: '' }
  }

  componentDidMount () {
    var input = document.getElementById('searchTextField')
    var options = { componentRestrictions: { country: 'NZ' } }
    new google.maps.places.Autocomplete(input, options)
  }

  handleChange (name, value) {
    this.setState({...this.state, [name]: value})
    const { dispatch, addAddress } = this.props
    console.log('innerHTML',document.getElementById('searchTextField').value)
    dispatch(addAddress(this.state.address))
  };

  render () {
    return (
      <div>
        <h2>Address</h2>
        <div>
          <label htmlFor="searchTextField">
            Please Insert an address:
          </label>
          <Input id="searchTextField" type='text' label='' name='address' value={this.state.address} onChange={this.handleChange.bind(this, 'address')} />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { address: state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addAddress }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput)
