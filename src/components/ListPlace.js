import React from 'react';


import './../css/ListPlace.css'

const ListPlace = props => {
    if (props.place.name != null) {
    console.log("Listplace", props.place)
    return (
        <div className="placeItem">
            <h4>{props.place.name}</h4>
            <div>{props.place.description}</div>
            <div>{props.place.location.address}</div>
        </div>
    )
    } else {
        return ""
    }
}

export default ListPlace;