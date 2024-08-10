import React,{useContext, useState, useEffect} from 'react';
import {cartContext} from "../../context/cartContext";

import cartEmpty  from "../../../public/assets/images/illustration-empty-cart.svg";
function CartListEmpty() {
  const {state}  = useContext(cartContext);
    const[cartQuantity, setCartQuantity] = useState(0); 
    const[cartTotal, setCartTotal] = useState(0);
    
    const calculateCartQuantity =  () => {
        let cartQuantity = 0;
    state.cart.forEach((item) => {
        cartQuantity += item.quantity;
    })
    setCartQuantity(cartQuantity);
    return;
  }
    
    const calculateCartTotal =  () => {
        let cartTotal = 0;
    state.cart.forEach((item) => {
        cartTotal += item.price * item.quantity;
    })
    setCartTotal(cartTotal);
    return;
  }
    useEffect(() => {
        calculateCartQuantity();
        calculateCartTotal();
    },[state.cart]);

  return (
      <div>
          <h1 className='
          mt-8 ml-8
          text-red font-bold text-4xl'>Your Cart ({cartQuantity})</h1>
        <img
        className='block m-auto mt-8 w-4/12'
        src={cartEmpty} alt="Cart empty icon" />
        <p 
        className='mt-12 pb-12 text-center text-lg text-slate-400'
        >Your added items will appear here</p>
      </div>
  )
}

export default CartListEmpty