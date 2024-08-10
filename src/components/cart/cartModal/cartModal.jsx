import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import checkmark from "../../../../public/assets/images/icon-order-confirmed.svg";
import CartModalCard from './cartModalCard';
import { cartContext } from '../../../context/cartContext';

function CartModal({ displayHandler }) {
  const {cartTotal, checkingOutHandler, dispatch } = useContext(cartContext);

  return ReactDOM.createPortal(
    <div className=' p-12 lg:w-4/12 lg:h-max lg:absolute lg:z-1000 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-lg'>
      <img className='ml-8 mt-8 mb-8' src={checkmark} alt="Green checkmark in a green-bordered circle" />
      <p className='ml-4 mb-8 text-xl text-slate-400'>We hope you enjoy your food!</p>
      <CartModalCard  />
      <div className=' bg-red opacity-50 w-12/12 rounded-md px-4 py-2   m-auto mb-12 flex justify-between items-center'>
        <p>Order Total</p>
        <p className='font-bold'>${cartTotal.toFixed(2)}</p>
      </div>
      <button
        onClick={() => {
          checkingOutHandler();
          displayHandler(false);
          dispatch({type:'clearCart'});
        }}
        className='w-10/12 block m-auto text-center rounded-full bg-red text-white text-xl font-bold p-2'>
        Start New Order
      </button>
    </div>,
    document.getElementById('cartModal')
  );
}

export default CartModal;
