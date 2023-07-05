import React from "react";
import './Card.css';

const Card = ({ name, url, id, height, weight}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width={200} height={200} />
            <div>
                <h2>{name}</h2>
                <p>url: {url}</p>
                <p>id: {id}</p>
                <p>height: {height}</p>
                <p>weight: {weight}</p>
            </div>
        </div>
    );
}

export default Card;