import React, { Component } from 'react'
import { SkyLightStateless } from 'react-skylight'
import _ from 'lodash'

import MapRender from './components/MapRender'
import Search from './components/Search'
import List from './components/List'
import Place from './components/Place'
import Api from './Api'

import './css/App.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      places: [],
      mapCoords: {
        lat: 59.9098,
        lng: 10.7636,
      },
      selectedCoords: {
        lat: 59.9098,
        lng: 10.7636,
      },
      markers: [[59.9098, 10.7636]],
      /*markers: [
        {
          lat: 59.9098,
          lng: 10.7636,
        }
      ],*/
      zoom: 13,
      searchValue: "",
      filteredPlaces: [],
      placeSelected: false,
      selectedPlace: "",
    }
    
    
  }
  
  componentDidMount = () => {
    this.setPlaces()
    
  }

  setPlaces = () => {
    return Api.getPlaces().then(places => {
      this.setState({
        places: places,
        filteredPlaces: places
      })
    })
  }



  searchEvent = (event) => {
    
    this.setState({
      searchValue: event.target.value,
    })
    
    this.populateList(event.target.value)
  }

  populateList = (search) => {
    if (search === "") {
      this.setState({filteredPlaces: this.state.places})
    } else {
      let filter = this.state.filteredPlaces.filter((place, id) => {
        return (_.startsWith(_.toLower(place.name), _.toLower(search)))
       
      })
      
      this.setState({filteredPlaces: filter})
    }


    this.forceUpdate()
  }
  selectPlace = (id) => {
    this.setState({
      placeSelected: true,
      selectedPlace: this.state.filteredPlaces[id]
    })
    this.forceUpdate()

  }

  closePlace = (event) => {
    this.setState({
      placeSelected: false
    })
    this.forceUpdate()
  }



  render() {
    return (
      <div className="App">
        <Search onChange={this.searchEvent}/>
        <MapRender mapCoords={this.state.mapCoords} clickHandler={this.selectPlace} zoom={this.state.zoom} selectedCoords={this.state.selectedCoords} markers={this.state.filteredPlaces}/>
        <List places={this.state.filteredPlaces} clickHandler={this.selectPlace}></List>
        <SkyLightStateless ref={ref => this.selectedPopup = ref} isVisible={this.state.placeSelected} onCloseClicked={() => {this.closePlace()}} title={this.state.selectedPlace.name}><Place visibility={this.state.placeSelected} data={this.state.selectedPlace} ></Place></SkyLightStateless>
        {/**/}
      </div>
    )
  }
}

export default App;
