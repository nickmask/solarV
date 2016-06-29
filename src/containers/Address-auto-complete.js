import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import { GoogleMap, GoogleMapLoader, Marker, SearchBox } from "react-google-maps"
import Input from 'react-toolbox/lib/input'

export default class Testing extends Component {
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
