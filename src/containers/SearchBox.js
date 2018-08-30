import React from 'react';

const SearchBox = ({onSearchChange}) => (
    <div className='pa2'>
        <input
            aria-label="Search Robots"
            onChange={(e) => onSearchChange(e)}
            className='pa3 ba b--green bg-light-blue'
            type="search"
            placeholder='Search Robots' />
    </div>
);

export default SearchBox;