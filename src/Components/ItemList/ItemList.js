import Item from '../Item/Item';
import React, { useState } from 'react';

const ItemList = ({ data }) => {
  return data.map((row) => <Item data={row} key={row.id} />);
};

export default ItemList;
