import React from 'react';
import QuantityButtons from './quantityButtons/quantityButtons';


function EditQuantity({inCartHandler,item}) {
    return (
                 <div className='flex justify-around py-2 items-center gap-4  rounded-3xl w-8/12 py-2
                absolute top-[95%] left-1/2 transform -translate-x-1/2 bg-red text-white'>
                    <QuantityButtons type={'subtract'} item={item}/>
                    <p className='font-semibold text-sm'>{item.quantity}</p>
                    <QuantityButtons item={item} type={'add'}  />
                </div>
    );
}

export default EditQuantity;
