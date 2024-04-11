import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ProductDetails} from './ProductDetails';
import { useUserContext } from '../userContext';

import './product.css'
export default function Product() {
const {books}=useUserContext();


  const {productId} = useParams();

  const product=books.find((e) => e.id === Number(productId)) ;

  if (!product || !product.volumeInfo) {
    return null;
    
  }

  
   const imageLinks = product.volumeInfo.imageLinks || {};
  const thumbnails = Object.values(imageLinks);

  return (
    <div className="product-details">
      <div className="product-images">
 
        {thumbnails.map((thumbnail, index) => (
          <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} />
        ))}
      </div>
      <div className="product-info">
        <h2>{product.volumeInfo.title}</h2>
        <p>Subtitle: {product.volumeInfo.subtitle}</p>
        <p>Authors: {product.volumeInfo.authors.join(', ')}</p>
        <p>Publisher: {product.volumeInfo.publisher}</p>
        <p>Published Date: {product.volumeInfo.publishedDate}</p>
        <p>Description: {product.volumeInfo.description}</p>
        <p>Categories: {product.volumeInfo.categories.join(', ')}</p>
        <p>Rating: {product.volumeInfo.averageRating} ({product.volumeInfo.ratingsCount} ratings)</p>

      </div>
    </div>
  );
}
