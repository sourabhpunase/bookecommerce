import React from 'react'

export const ProductDetails = (props) => {
    const {product}=props;
    console.log(product);
    
  return (
    <div style={{color:"red"}}>
        <p>
  {product?.volumeInfo.description}
        </p>


    </div>
  )
}
