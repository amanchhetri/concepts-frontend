import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const location = useLocation();
  return (
    <div>Product: {location.state.name}</div>
  )
}

export default Product