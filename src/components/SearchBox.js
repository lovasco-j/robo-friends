import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className='pa2'>
            <input
                onChange={(e) => onSearchChange(e)}
                className='pa3 ba b--green bg-light-blue'
                type="search"
                placeholder='Search Robots' />
        </div>
    );
}

export default SearchBox;