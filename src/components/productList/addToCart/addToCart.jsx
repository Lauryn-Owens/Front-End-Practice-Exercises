import React,{useContext} from 'react';
import addToCart from "../../../../public/assets/images/icon-add-to-cart.svg";

import { cartContext } from '../../../context/cartContext';

function AddToCart({name, price, inCartHandler}) {
  const {state, dispatch} = useContext(cartContext);

  return (
    <button className=' block flex justify-center items-center gap-4 bg-white border border-black rounded-3xl w-8/12 py-2
        absolute top-[95%] left-1/2 transform -translate-x-1/2 hover:border-2 hover:border-red
    '
    onClick={() => {
      inCartHandler(true);
       dispatch({type:'addToCart', payload:{name:name, price:price}})
   }}
    >
        <img src={addToCart} alt="icon-add-to-cart " />
        <p className='font-semibold text-sm '>Add to Cart</p>
    </button>
  );
}

export default AddToCart;
