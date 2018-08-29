import React from 'react';

const Card = ({id, name, email: username, company}) => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{company.name}</p>
        </div>
    );
}

export default Card;
