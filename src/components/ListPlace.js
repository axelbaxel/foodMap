import React from 'react';


import './../css/ListPlace.css'

const ListPlace = props => {
    if (props.place.name != null) {
    return (
        <div className="placeItem" onClick={props.onClick}>
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