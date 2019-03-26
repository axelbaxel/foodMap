import React from 'react';

const Place = props => {
    return (
        <div className={`place ${(props.visibility) ? 'visible' : 'hidden'}`} >
            
        </div>
    )
}

export default Place;