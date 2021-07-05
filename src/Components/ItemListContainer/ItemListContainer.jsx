import { Link } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import mockedData from '../../mockData.json';


const apiCall = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = category ? mockedData.filter(item => item.category === parseInt(category)) : mockedData;
      resolve(filteredData);
    }, 2000);
  });
};

const ItemListContainer = (props) => {
  const params = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await apiCall(params.id);
      setData(data);
    };
    getData();
  }, []);

  return (
    <div>
      <strong>{props.greeting}</strong>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
