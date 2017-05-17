import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-map'

export default class Map extends React.Component {
  render() {
    const mapContainer = <div style={{ height: '100%', width: '100%' }}></div>
    return (
      <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{ streetViewController: false, myTypeControl: false }}>
          </GoogleMap>
        } />
    );
  }
}
