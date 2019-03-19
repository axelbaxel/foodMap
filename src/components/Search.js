import React from 'react';

const Search = props => {
    return (
        <div className='search'>
        <input type='search' onChange={props.onChange}></input>
        </div>
    )
}

export default Search;