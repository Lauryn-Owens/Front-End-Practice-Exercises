import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { cartContext } from '../../context/cartContext';

function CartModalCard({ cardDetails }) {
    const { state } = useContext(cartContext);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('../../../public/utils/data.json');
                setProducts(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Create a map to store products with unique names
    const productMap = new Map();

    state.cart.forEach(cartItem => {
        const product = products.find(p => p.name === cartItem.name);
        if (product) {
            productMap.set(product.name, {
                ...product,
                quantity: cartItem.quantity
            });
        }
    });

    // Convert map values to an array
    const cartProducts = Array.from(productMap.values());

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                {
                    cartProducts.map((product, index) => (
                        <div key={index} className='w-full rounded-md px-4 py-2 m-auto  flex justify-between items-center c'>
                            <div className='flex gap-8 '>
                                <picture className='block'>
                                    <source className='rounded-lg w-12 h-12' srcSet={product.image.desktop} media="(min-width: 1200px)" />
                                    <source className='rounded-lg w-12 h-12' srcSet={product.image.tablet} media="(min-width: 800px)" />
                                    <source className='rounded-lg w-12 h-12' srcSet={product.image.mobile} media="(min-width: 400px)" />
                                    <img className='rounded-lg block w-12 h-12' src={product.image.thumbnail} alt={product.name} />
                                </picture>
                                <div>
                                    <p className='font-bold'>{product.name}</p>
                                    <div className='flex gap-4 text-gray-300'>
                                        <p className='text-Rose-900'>{product.quantity}X</p>
                                        <p>@ ${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-black'>${(product.price * product.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default CartModalCard;
