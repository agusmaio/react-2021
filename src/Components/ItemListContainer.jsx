import { useState } from 'react';
import ItemCount from './ItemCount/ItemCount';


export const ItemListContainer = (props) => {

  const [stock, setStock] = useState(5);

  const onAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito!`);
  };
    return (
        <div>
            <strong>{props.greeting}</strong>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
        
    )
}