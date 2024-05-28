
import React from 'react';
import './Card.css';

const Card = ({ beerData }) => {
  return (
    <div className="card">
      <img src={beerData.image} alt={beerData.name} />
      <h2>{beerData.name}</h2>
      <p>Price: {beerData.price}</p>
      <p>Rating: {beerData.rating.average.toFixed(2)} </p>
      <p>({beerData.rating.reviews} reviews)</p>
    </div>
  );
};

export default Card;
