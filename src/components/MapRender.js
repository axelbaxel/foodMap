import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './../css/MapRender.css'



const MapRender = props => {
    return (
        <div className="map">
        <Map center={[props.mapCoords.lat, props.mapCoords.lng]} zoom={props.zoom} > 
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {props.markers.map((location, id) => {
            if (location.name != null) {
              return ( 
                <Marker key={`marker-${id}`} position={[location.location.lat, location.location.lng]} >
                  <Popup><div>Dette er {location.name}</div>
                  {location.description}
                  </Popup>
                </Marker>
              )
              
            }
          return null;
          }
            )}
          
        </Map></div>
    )
}

export default MapRender;