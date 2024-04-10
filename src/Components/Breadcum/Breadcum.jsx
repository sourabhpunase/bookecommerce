import React from 'react'
import styles from './breadcum.module.css'
import arrow from '../assets/breadcrum_arrow.png'
export const Breadcum = (props) => {
    const {product}=props;
    console.log(product)
      
        return (
        <div className={styles.breadcum}>
    Home<img src={arrow} />
    SHOP
    <img src= {arrow}
    />
    {product?.volumeInfo.categories}
    <img src={arrow}/>
    
    {product?.volumeInfo.title}
    
        </div>
      )
}
