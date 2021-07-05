import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import mockedData from '../../mockData.json';
import { useParams } from 'react-router-dom';

const apiCall = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id ? mockedData.find(item => item.id === parseInt(id)) : null);
    }, 3000);
  });
};

const ItemListContainer = (props) => {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await apiCall(params.id);
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
