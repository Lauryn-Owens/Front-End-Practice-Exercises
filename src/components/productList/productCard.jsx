import React, {useContext } from 'react';
import AddToCart from './addToCart/addToCart';
import EditQuantity from './addToCart/editQuantity';
import { cartContext } from '../../context/cartContext';

function ProductCard({ name, imageUrl, category, price }) {
    const { state, dispatch } = useContext(cartContext);
    const item = state.cart.find((curr) => curr.name === name);
    const quantity = item ? item.quantity : 0;

    const inCart = quantity > 0;

    const inCartHandler = (cart) => {
        if (cart) {
            dispatch({ type: 'incrementQuantity', payload: { name, price } });
        } else {
            dispatch({ type: 'addToCart', payload: { name, price } });
        }
    };

    return (
        <div className='w-9/12 h-[35rem] m-auto'>
            <picture className='block mb-12 relative'
            style = {{border: quantity ? '2px solid hsl(14, 86%, 42%)' : 'none',
                borderRadius: quantity ? '0.5rem' : 'none'
            }}
            >
                <source className='rounded-lg block w-full' srcSet={imageUrl.desktop} media="(min-width: 1200px)" />
                <source className='rounded-lg block w-full' srcSet={imageUrl.tablet} media="(min-width: 800px)" />
                <source className='rounded-lg block w-full' srcSet={imageUrl.mobile} media="(min-width: 400px)" />
                <img className='rounded-lg block w-full' src={imageUrl.thumbnail} alt={category} />
                {
                    !inCart ? (
                        <AddToCart inCartHandler={() => inCartHandler(false)} name={name} price={price}/>
                    ) : (
                        <EditQuantity item={item} inCartHandler={() => inCartHandler(true)} />
                    )
                }
            </picture>
            <p className='font-thin text-gray-400 mb-2'>{category}</p>
            <p className='font-bold tracking-wide text-xl mb-2'>{name}</p>
            <p className='font-semibold text-xl text-rose-800 mb-2'>${price.toFixed(2)}</p>
        </div>
    );
}

export default ProductCard;
