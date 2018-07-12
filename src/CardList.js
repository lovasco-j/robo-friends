import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>{
            robots.map((bot) => <Card key={bot.id} {...bot}/>)
        }</div>
    );
}

export default CardList;
