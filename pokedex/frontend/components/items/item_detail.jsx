import React from 'react';

const ItemDetail = ({item}) => (
  <>
    <h3>{item.name}</h3>
    <h3>Happiness: {item.happiness}</h3>
    <h3>Price: {item.price}</h3>
  </>
);

export default ItemDetail;

