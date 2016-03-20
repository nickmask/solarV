import React from 'react'

var placeSearch, autocomplete;

export default React.createClass({

  initAutocomplete: function () {
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']})
    autocomplete.addListener('place_changed', this.fillInAddress)
  },

  fillInAddress: function () {
    var place = autocomplete.getPlace()
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0]
      if (addressType === 'locality') {
        this.props.setCity(place.address_components[i].long_name)
      }
    }
  },

  geolocate: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  },

  startAutocomplete: function () {
      this.geolocate()
      this.initAutocomplete()
  },

  render: function () {
  return (
    <div class='address'>
      <div>
        <div>
          <h2
          className="control-label"
          for="focusedInput"
          >Address</h2>
          <input
          id="autocomplete"
          onClick={this.startAutocomplete}
          placeholder="Enter your address"
          type="text"
          />
        </div>
      </div>
    </div>
  )
  }
})
