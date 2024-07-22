import React from 'react';
import decrementQuantity from '../../../../public/assets/images/icon-decrement-quantity.svg';
import incrementQuantity from '../../../../public/assets/images/icon-increment-quantity.svg';

function EditQuantity() {
  return (
    <div className='flex justify-center items-center gap-4 bg-white border border-black rounded-3xl w-9/12 py-1
        absolute top-[95%] left-1/2 transform -translate-x-1/2
    '>
          <img src={incrementQuantity} alt="icon-increment-quantiy" />
        <p className='font-semibold text-sm'>1</p>
        <img src={decrementQuantity} alt="icon-decrement-quantity" />
    </div>
  )
}

export default EditQuantity