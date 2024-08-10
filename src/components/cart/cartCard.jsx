import React,{useContext} from 'react';
import { cartContext } from '../../context/cartContext';

function CartCard({cardDetails}) {
  const{dispatch} = useContext(cartContext);

  return (
    <article className='w-10/12 m-auto mt-4'>
       <h5 className='font-semibold'>{cardDetails.name}</h5>
      <div className='flex'>
        <div className=' w-11/12  flex gap-2 items-center'>
          <p className=''>{cardDetails.quantity}x</p>
          <p>@ ${cardDetails.price.toFixed(2)}</p>
          <p>$ {(cardDetails.price * cardDetails.quantity).toFixed(2)}</p>
        </div>
        <div
         className='w-1/12 flex justify-center items-center'>
            <button
            onClick={() =>{
              const name = cardDetails.name
              dispatch({type:'deleteCartItem', payload:{name}})
            }}
            className='rounded-full hover:border-2 hover:border-black font-bold w-7 h-7 border-[0.1rem] border-black
            text-xl md:text-2xl lg:text-3xl flex justify-center items-center
            '>
                &#215; 
            </button>
        </div>
      </div>
      <hr className='mt-8'/>
    </article>
  )
}

export default CartCard;