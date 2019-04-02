import React from 'react';


import './../css/ListPlace.css'

const ListPlace = props => {
    if (props.place.name != null) {
    return (
        <div className="placeItem" id={props.id} onClick={props.onClick.bind(this,props.id)}>
            <h4 id={props.id}>{props.place.name}</h4>
            <div id={props.id}>{props.place.description}</div>
            <div id={props.id}>{props.place.location.address}</div>
        </div>
    )
    } else {
        return ""
    }
}

export default ListPlace;