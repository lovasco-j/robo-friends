import React from 'react';

const SearchBox = ({onSearchChange}) => {

    const onChange = (event) => onSearchChange(event.target.value);

    return (
        <div className='pa2'>
            <input
                onChange={onChange}
                className='pa3 ba b--green bg-light-blue'
                type="search"
                placeholder='Search Robots' />
        </div>
    );
}

export default SearchBox;