import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { formatPrice } from '../helpers';
import './style.css';

const Item = ({ data }) => {
  console.log(data);
  const priceFormated = formatPrice(data.price);
  return (
    <div className="div-card">
      <h2 className="h2-title">{data.title}</h2>
      <img className="img-card" src={data.pictureUrl} />
      <p>
        <span>{priceFormated[0]}</span>
        <span class='decimal'>{priceFormated[1]}</span>
      </p>
    </div>
  );
};

export default Item;
