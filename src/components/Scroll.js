import React from 'react';

const Scroll = ({children}) => {
    return (
        <div
            className='bt bw1 b--green bb bw1 b--green'
            style={{overflowY: 'scroll', height: '500px'}}>
            {children}
        </div>
    );
}

export default Scroll;
