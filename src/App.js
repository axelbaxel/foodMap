import React, { Component } from 'react';
import './App.css';
//import Map from './components/Map';
import Search from './components/Search';
import Api from './Api';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import EnturService from '@entur/sdk';

const service = new EnturService({ clientName: 'Axel-testapp'})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      closeStops: [],
      mapCoords: {
        latitude: 59.9098,
        longitude: 10.7636,
      },
      selectedCoords: {
        latitude: 59.9098,
        longitude: 10.7636,
      },
      zoom: 13,
    }
  }

  getCloseStops = (/*lat, long*/) => {
    /*let coords = {
      latitude: lat,
      longitude: long
    }*/

    let closeStops = service.getStopPlacesByPosition(this.state.selectedCoords);
    this.setState({
      closeStops: closeStops
    })
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Map center={this.state.mapCoords} zoom={this.state.zoom}> 
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}

export default App;
