import React from 'react';

const Place = props => {
    return (
        <div className="place" >
            <h4>{props.data.description}</h4>
            <h4><a href={props.data.url}>Website</a> </h4>
            <h4>Address: {/*props.data.location.address*/}</h4>
            <img src={props.data.img} alt={props.data.name} />
        </div>
    )
}

export default Place;