import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';

const apiCall = () => {
  const data = {
    id: 1,
    title: 'iPhone',
    description: 'Descripcion de iPhone',
    price: 1000,
    pictureUrl:
      'https://i.blogs.es/a812a4/iphone-12-iphone-12-pro-analisis-applesfera--28/1366_2000.jpg',
    stock: 2,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

const ItemListContainer = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await apiCall();
      setData(data);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <strong>{props.greeting}</strong>
      {data && <ItemDetail data={data} />}
    </div>
  );
};

export default ItemListContainer;
