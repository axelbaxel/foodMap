import React from 'react';


import './../css/ListPlace.css'

const ListPlace = props => {
    return (
        <div className="placeItem">
            <h4>{props.place.name}</h4>
            <div>{props.place.description}</div>
            <div>{props.place.location.address}</div>
        </div>
    )
}

export default ListPlace;