import React from 'react';
import addToCart from "../../../../public/assets/images/icon-add-to-cart.svg";

function AddToCart() {
  return (
    <div className='flex justify-center items-center gap-4 bg-white border border-black rounded-3xl w-9/12 py-1
        absolute top-[95%] left-1/2 transform -translate-x-1/2
    '>
        <img src={addToCart} alt="icon-add-to-cart " />
        <p className='font-semibold text-sm'>Add to Cart</p>
    </div>
  );
}

export default AddToCart;
