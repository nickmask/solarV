import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import Input from 'react-toolbox/lib/input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../actions/index.js'

let autocomplete

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
}


class AddressInput extends Component {
  constructor () {
    super()
    this.state = { address: []}
    this.fillInAddress = this.fillInAddress.bind(this);

  }

  componentDidMount () {
    autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});
      autocomplete.addListener('place_changed', this.fillInAddress);
  }

  handleChange (name, value) {
    this.setState({...this.state, [name]: value})
    const { dispatch, addAddress } = this.props
    // dispatch(addAddress(this.state.address))
  }

  fillInAddress () {
    let place = autocomplete.getPlace()
    // this.setState({ address: place.formatted_address, city: place.address_components[3].long_name})
    let data = []
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        data.push({[addressType]: place.address_components[i][componentForm[addressType]]})
        console.log(data)
      }
    }
    console.log(data[2])
  }

  render () {
    return (
      <div>
        <h2>Address</h2>
        <div>
          <label htmlFor="searchTextField">
            Please Insert an address:
          </label>
          <Input id="autocomplete" type='text' label='' name='address' value={this.state.address} onChange={this.handleChange.bind(this, 'address')} />
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
