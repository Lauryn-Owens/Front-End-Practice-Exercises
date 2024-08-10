import { useState, useEffect } from 'react';
import axios from 'axios';

const useCartProducts = (cart) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('../../../public/utils/data.json');
                setProducts(result.data);
            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const getCartProducts = () => {
        const productMap = new Map();

        cart.forEach(cartItem => {
            const product = products.find(p => p.name === cartItem.name);
            if (product) {
                productMap.set(product.name, {
                    ...product,
                    quantity: cartItem.quantity
                });
            }
        });

        return Array.from(productMap.values());
    };

    return { cartProducts: getCartProducts(), error };
};

export default useCartProducts;
