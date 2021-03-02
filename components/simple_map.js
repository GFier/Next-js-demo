import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Keys} from '../keys/keys'
import map from '../css/maps.module.css'

const SimpleMap = ({ location, zoomLevel }) => (
    <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Keys.google_maps_key}}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={map => ({ mapTypeId: map.MapTypeId.SATELLITE })}
        >
        </GoogleMapReact>
    </div>
)

export default SimpleMap;
