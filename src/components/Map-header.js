import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function SimpleMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}
            onClick={::this.handleMapClick}>
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={this.handleMarkerRightclick.bind(this, index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
