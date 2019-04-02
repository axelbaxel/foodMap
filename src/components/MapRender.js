import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

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
                <Marker key={`marker-${id}`} id={id} position={[location.location.lat, location.location.lng]} onClick={props.clickHandler.bind(this, id)} >
                  
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