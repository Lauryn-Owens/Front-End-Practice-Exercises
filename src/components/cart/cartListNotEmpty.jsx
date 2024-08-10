import React, {useState, useContext, useEffect} from 'react'

import { cartContext } from '../../context/cartContext';
import CartCard from './cartCard';

import carbonNeutral from "../../../public/assets/images/icon-carbon-neutral.svg";

function CartListNotEmpty() {
    const {state, confirmOrderHandler, cartQuantity, cartTotal, checkingOutHandler}  = useContext(cartContext);
    
    
  return (
    <div className='bg-ivory w-10/12 m-auto rounded-lg flex flex-col gap-4 mb-8
    '>
        <h1  className='w-10/12 m-auto mt-8 text-red   font-bold text-4xl'>Your Cart ({cartQuantity})</h1>
       {
        state.cart.map((currCard) => {
            return(
                <CartCard cardDetails={currCard}/>
            )
        })
       }
        <div className='w-10/12 m-auto  mt-8 flex justify-between items-center'>
            <p>Order Total</p>
            <p className='font-bold'>$ {cartTotal.toFixed(2)}</p>
        </div>
        <div className='w-8/12 m-auto mt-8 flex gap-4 w-max justify-between items-center text-underline bg-red opacity-50 py-4 w-11/12 rounded-lg'>
            <img className='ml-4' src={carbonNeutral} alt="" />
            <p className='mr-4'>This a <span className='font-bold'>carbon-neutral</span> delivery</p>
        </div>
        <div className='pb-8'>
            <button 
            onClick={() => {
                 confirmOrderHandler();
                 checkingOutHandler(true);
            }}
            className='mt-8 block m-auto bg-red
            w-8/12 rounded-full h-14 
            text-white text-lg font-thin tracking-wider'> Confirm Order</button>
        </div>
    </div>
  )
}

export default CartListNotEmpty