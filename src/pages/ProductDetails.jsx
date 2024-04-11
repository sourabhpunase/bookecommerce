import React from 'react';
import { useUserContext } from '../userContext';
import star from '../Components/assets/star_icon.png';
import stardull from '../Components/assets/star_dull_icon.png';


export const ProductDetails = ({ product }) => {
    const { addToCart } = useUserContext();

    return (
        <div className='display'>
        
            <div className="display-left">
                <div className="display-imglist">
                    {/* Map through product images */}
                    {product?.imageLinks?.map((image, index) => (
                        <img key={index} src={image} alt={`Product Image ${index}`} />
                    ))}
                </div>
                <div className="diplay-img">
                    <img src={product?.imageLinks?.[0]} alt="Main Product" className="main-img" />
                </div>
            </div>
            <div className="display-right">
                <h1>{product?.volumeInfo?.title}</h1>
                <div className="star">
                    {/* Render star rating */}
                    {[...Array(product?.volumeInfo?.averageRating || 0)].map((_, index) => (
                        <img key={index} src={star} alt="Star Icon" />
                    ))}
                    {[...Array(5 - (product?.volumeInfo?.averageRating || 0))].map((_, index) => (
                        <img key={index} src={stardull} alt="Dull Star Icon" />
                    ))}
                    <p>{product?.volumeInfo?.ratingsCount || 0}</p>
                </div>
                <div className="display-right-price">
                    <div className="oldprice">${product?.saleInfo?.listPrice?.amount || 0}</div>
                    <div className="newprice">${product?.saleInfo?.retailPrice?.amount || 0}</div>
                </div>
                <div className="descp">
                    {product?.volumeInfo?.description || ''}
                </div>
                <div className="right-size">
                    <h1>Select Size</h1>
                    <div className="sizes">
                        {/* Add size options here if available */}
                        {/* Example: */}
                        {/* <div className='size'>S</div> */}
                    </div>
                </div>
                <button onClick={() => { addToCart(product?.id) }}>ADD TO CART</button>
                <p className="display-right-category">
                    <span>Category:</span> {product?.volumeInfo?.categories?.join(', ') || ''}
                </p>
                {/* Render tags if available */}
                {product?.volumeInfo?.tags && (
                    <p className="display-right-category">
                        <span>Tags:</span> {product?.volumeInfo?.tags?.join(', ') || ''}
                    </p>
                )}
            </div>
        </div>
    )
}
