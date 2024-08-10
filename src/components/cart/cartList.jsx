import React,{useContext} from 'react';

import CartListEmpty from './cartListEmpty';
import CartListNotEmpty from './cartListNotEmpty';

import { cartContext } from '../../context/cartContext'

function CartList() {
  const {state}  = useContext(cartContext);
  return (
    <div className='bg-ivory w-10/12 min-h-96 m-auto  mt-8  rounded-lg flex flex-col gap-4 mb-8
    '>
        {
        state.cart.length ? (
            <CartListNotEmpty/>
        ) : (
          <CartListEmpty/>
        )
      }
    </div>
  )
}

export default CartList