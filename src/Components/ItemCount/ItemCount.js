import React, { useState } from 'react';
import './Style.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [value, setValue] = useState(initial);

  const inputHandler = (e) => {
    if (e.target.value.length === 0) {
      setValue(1);
      return;
    }
    setValue(parseInt(e.target.value));
  };

  const addOne = () => {
    setValue((valorAnterior) => {
      return valorAnterior + 1;
    });
  };

  const substractOne = () => {
    setValue((valorAnterior) => {
      if (valorAnterior > 0) return valorAnterior - 1;
      return valorAnterior;
    });
  };

  const addToCart = () => {
    if (value > stock) {
      alert('No hay suficiente stock');
      return;
    }

    onAdd(value);
  };

  return (
    <div className='carrito-selector'>
      <div className='carrito-input'>
        <button onClick={substractOne}>-</button>
        <input
          type='number'
          min='0'
          value={value}
          onChange={inputHandler}
        ></input>
        <button onClick={addOne}>+</button>
      </div>
      <button onClick={addToCart} className='carrito-add'>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
