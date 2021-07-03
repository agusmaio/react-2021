import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { formatPrice } from '../helpers';

const ItemDetail = ({ data }) => {
    console.log(data);
    const onAdd = (cantidad) => {
      alert(`Agregaste ${cantidad} al carrito!`);
    };
    const priceFormated = formatPrice(data.price);
    return (
      <div className="div-card">
        <h2 className="h2-title">{data.title}</h2>
        <p className="p-card">{data.description}</p>
        <img className="img-card" src={data.pictureUrl} />
        <p>
          <span>{priceFormated[0]}</span>
          <span class='decimal'>{priceFormated[1]}</span>
        </p>
        <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
      </div>
    );
  };
  
  export default ItemDetail;
  