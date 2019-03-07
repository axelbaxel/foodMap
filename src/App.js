import React, { Component } from 'react';
import EnturService from '@entur/sdk';

import MapRender from './components/MapRender'
import Search from './components/Search'
import List from './components/List'
import Api from './Api'

import './css/App.css';

import places from './places.json'

const service = new EnturService({ clientName: 'Axel-testapp'})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      closeStops: "",
      mapCoords: {
        lat: 59.9098,
        lng: 10.7636,
      },
      selectedCoords: {
        latitude: 59.9098,
        longitude: 10.7636,
      },
      markers: [[59.9098, 10.7636]],
      zoom: 13,
      searchValue: "",
      places: [places[0], places[1], places[2]]
    }
    
    
  }
  
  componentDidMount = () => {
    this.getCloseStops();
  }

  getCloseStops = (/*lat, long*/) => {
    /*let coords = {
      latitude: lat,
      longitude: long
    }*/
    
    return service.getStopPlacesByPosition(this.state.selectedCoords).then(closeStops => {
      this.setState({
        closeStops: closeStops,
      })
    })
    
  }

  searchEvent = (event) => {

  }

  populateList = (searchValue) => {

  }

  populateMarkers = () => {

  }

  render() {
    return (
      <div className="App">
        <Search />
        <MapRender mapCoords={this.state.mapCoords} zoom={this.state.zoom} selectedCoords={this.state.selectedCoords} markers={this.state.markers}/>
        <List places={places}></List>
      </div>
    );
  }
}

export default App;
