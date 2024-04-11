//GETTING STYLES
import './cart.css'

//GETTING USER CONTEXT TO USE
import { useUserContext } from '../../userContext';

import removeicon from '../assets/cart_cross_icon.png'
//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink, Navigate } from 'react-router-dom';

const Cart = () => {
    const {books,cartItems,addToCart, removeCart, checkOut,gettotalAmount, authenticate} = useUserContext();
    //if not authenticate then return homepage
    // if(!authenticate){
    //     return (
    //         <Navigate to='/' replace={true}/>
    //     )
    // }
    return (
        <div className='cartitems'>
        <div className="cartitem-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr/>
        {books?.map((e)=>{
        if(cartItems[e.id]>0){
            return (
            <div>
        <div className="cartitem-format cartitem-main">
          <img src={e.volumeInfo.imageLinks?.thumbnail || ''} alt={e.volumeInfo.title} className='carticon-icon'/>
        <p>{e.volumeInfo.title || 'No Title'}</p>
        <p>${e.saleInfo?.retailPrice?.amount || 499}</p>
        <button className='carticon-quantity'>{cartItems[e.id]}</button>
        <p>${(e.saleInfo?.retailPrice?.amount || 499)* cartItems[e.id]}</p>
        <img className='carticon-remove' src={removeicon} onClick={()=>{removeCart(e.id)}} />
        
        </div>
        <hr/>
        
        </div>)
        }
        return null;
        })}
        <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
        <div className="cartitem-total-item">
        <p>Subtotal</p>
        <p>${gettotalAmount()}</p>
        
        </div>
        <hr/>
        <div className="cartitem-total-item">
            <p>Shipping Fee</p>
            <p>free</p>
        </div>
        <hr/>
        <div className="cartitem-total-item">
            <p>Total</p>
            <p>${gettotalAmount()}</p>
        </div>
            </div>
           <NavLink to={'/orders'} onClick={() => {checkOut()}}>
            
             <button>PROCEED TO CHECKOUT</button> </NavLink>
        </div>
        <div className="promocode">
            <p>If you have promocode ,Enter it here</p>
            <div className="promobox">
                <input type='text' placeholder='appply here'/>
                <button>Submit</button>
            </div>
        </div>
        
        </div>
        
            </div>
          
    )
};
export default Cart;