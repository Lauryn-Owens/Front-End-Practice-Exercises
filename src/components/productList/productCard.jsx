import React,{useState} from 'react'
import AddToCart from './addToCart/addToCart';
import EditQuantity from './addToCart/editQuantity';

function ProductCard({name, imageUrl, category, price}) {
   
  return (
    <div className='w-9/12 h-[35rem] m-auto'>
        <picture className='block mb-12 relative'>
            <source  className= 'rounded-lg  block w-full' srcSet={imageUrl.desktop} media="(min-width: 1200px)"/>
            <source  className= 'rounded-lg block w-full' srcSet={imageUrl.tablet} media="(min-width: 800px)"/>
            <source  className= 'rounded-lg block w-full' srcSet={imageUrl.mobile} media="(min-width: 400px)"/>
            <img  className= 'rounded-lg block w-full' src={imageUrl.thumbnail} alt={category}/>
            <AddToCart/>
           {/**  <EditQuantity/> */}
        </picture>
        <p className='font-thin text-gray-400 mb-2'>{category}</p>
        <p className=' font-bold tracking-wide text-xl mb-2'>{name}</p>
        <p className='font-semibold text-xl text-rose-800 mb-2'>${price.toFixed(2)}</p>
       
    </div>
  )
}

export default ProductCard