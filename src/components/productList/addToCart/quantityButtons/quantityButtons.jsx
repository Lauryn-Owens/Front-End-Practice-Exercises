import React, { useContext } from 'react';
import decrementQuantity from '../../../../../public/assets/images/icon-decrement-quantity.svg';
import incrementQuantity from '../../../../../public/assets/images/icon-increment-quantity.svg';
import { cartContext } from '../../../../context/cartContext';

function QuantityButtons({ type, item }) {
    const { dispatch } = useContext(cartContext);

    return (
        <>
            {type === 'add' ? (
                <button 
                    onClick={() => {
                        if (item) {
                            dispatch({ type: 'incrementQuantity', payload: item });
                        }
                    }}
                    className='w-6 h-6 rounded-full bg-red border-[0.1rem] border-white flex justify-center items-center'
                >
                    <img src={incrementQuantity} alt="icon-increment-quantity" />
                </button>
            ) : (
                <button 
                onClick={() => {
                    if (item) {
                        dispatch({ type: 'decrementQuantity', payload: item });
                    }
                }}
                className='w-6 h-6 rounded-full bg-red border-[0.1rem] border-white flex justify-center items-center'>
                    <img src={decrementQuantity} alt="icon-decrement-quantity" />
                </button>
            )}
        </>
    );
}

export default QuantityButtons;
