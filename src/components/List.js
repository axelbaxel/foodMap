import React from 'react';
import ListPlace from './ListPlace'

const List = props => {
    return (<div className='list'>
        {props.places.map((place, id) => 
            <ListPlace place={place} key={id} />
        )}</div>
        
    )
}

export default List;