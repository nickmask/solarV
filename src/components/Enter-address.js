import React from 'react'
import { geolocate, initAutocomplete } from './mapAutoComplete'

export default React.createClass({

  autocomplete: () => {
      geolocate()
      initAutocomplete()
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
