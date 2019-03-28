import React from 'react';
import ListPlace from './ListPlace'

const List = props => {
    return (<div className='list'>
        {props.places.map((place, id) => 
            <ListPlace place={place} id={id} key={id} onClick={props.clickHandler} />
        )}</div>
        
    )
}

export default List;