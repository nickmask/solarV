import React from 'react'
import { geolocate, initAutocomplete, autocomplete } from './mapAutoComplete'

export default React.createClass({

  autocomplete: () => {
      geolocate()
      initAutocomplete()
      console.log(document.getElementById('autocomplete'))
  },

  getCity: function (array) {
    for (var i = 0; i < array.length; i++) {
      var addressType = array[i].types[0];
      if (addressType === 'locality') {
        this.props.setCity(array[i].long_name)
      }
    }
  },

  render: function () {
  return (
    <div class='address'>
      <div>
        <div>
          <h2 className="control-label" for="focusedInput">Address</h2>
          <input id="autocomplete" onClick={this.autocomplete} placeholder="Enter your address" type="text"/>
        </div>
      </div>
    </div>
  )
  }
})
