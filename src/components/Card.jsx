import React from 'react';
import netflix from '../assets/images/netflixx.jpg'

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(card.id)}>
      {card.flipped ? (
        <img src={card.img} alt={`Card ${card.id}`} className='card-img' />
      ) : (
        <img src={netflix} alt={`Card ${card.id}`} className='card-back' />
      )}
    </div>
  );
};

export default Card;