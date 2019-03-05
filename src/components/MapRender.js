import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import './../css/MapRender.css'



const MapRender = props => {
    return (
        <div className="mapContainer">
        <Map center={props.mapCoords} zoom={props.zoom} > 
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {props.markers.map((position, id) => 
            <Marker key={`marker-${id}`} position={position} >
              <Popup>Dette er sted nummer {id+1}</Popup>
            </Marker>
            )}
          
        </Map></div>
    )
}

export default MapRender;