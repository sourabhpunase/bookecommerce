import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ProductDetails} from './ProductDetails';
import { useUserContext } from '../userContext';
import { Breadcum } from '../Components/Breadcum/Breadcum';

export default function Product() {
const {books}=useUserContext();


  const {productId} = useParams();

  const product=books.find((e) => e.id === Number(productId)) 

  // Conditionally render ProductDetails component only when productId is available and data has been fetched
  return (
    <div>

      <Breadcum product={product}/>
        <ProductDetails product={product} />
    
    </div>
  );
}
