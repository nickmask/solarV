import React, { PropTypes, Component } from 'react'
import Input from 'react-toolbox/lib/input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress, fetchCity } from '../actions/index.js'

let autocomplete

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
  }

  fetchCity(city) {
    this.props.fetchCity()
  }

  fillInAddress () {
    const { dispatch, addAddress } = this.props
    let place = autocomplete.getPlace()
    const componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    }
    let data = []
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        data[addressType] = place.address_components[i][componentForm[addressType]]
      }
    }
    this.setState({ address: data})
    fetchCity(this.state.address.locality)
    dispatch(addAddress(this.state.address))
  }

  render () {
    return (
      <div>
        <h2>Address</h2>
        <div>
          <label htmlFor="searchTextField">
            Please Insert an address:
          </label>
          <Input id="autocomplete" type='text' label='' name='address' />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { address: state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addAddress, fetchCity }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput)
