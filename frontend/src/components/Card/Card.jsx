import React from 'react';
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className='card'>
      <div className='image'><img src={item.img} alt="" /></div>
      <p>{item.name}</p>
      <div className='price'>
        <p className='old'>${item.oldPrice}</p>
        <p>${item.newPrice}</p>
      </div>
    </div>
  )
}

export default Card;