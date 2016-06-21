import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import { GoogleMap, GoogleMapLoader, Marker, SearchBox } from "react-google-maps";

export default class Testing extends Component {
    componentDidMount () {
    var input = document.getElementById('searchTextField');
    var options = {componentRestrictions: {country: 'NZ'}};
    new google.maps.places.Autocomplete(input, options);
  }

  buttonClick () {
    alert(this.refs.searchField.getDOMNode().value);
  }

  render () {
    return (
      <Col sm={4} panel>
        <h2>Address</h2>
        <div>
          <label htmlFor="searchTextField">
            Please Insert an address:
          </label>
          <br/>
          <input ref='searchField' id="searchTextField" type="text" size="50"/>
          <br/>
          <button onClick={this.buttonClick}>Submit</button>
          </div>
        </Col>
    )
  }
}
