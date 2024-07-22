import {useState, useEffect} from 'react';
import axios from 'axios';
//import '../../../public/utils/data.json';
import React from 'react';
import ProductCard from './productCard';



function ProductList() {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('../../../public/utils/data.json');
                setProducts(result.data);
                //setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                //setError(error);
                //setLoading(false);
            }
        };

        fetchData();
    }, []);
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl mt-8 mb-8'>Desserts</h1>
        <ul className='flex flex-col gap-14'>
        {
         products.map((curr, currIdx) => {
            return(
              <li key={currIdx}>
                     <ProductCard name={curr.name} 
               imageUrl={curr.image}
               category={curr.category}
               price={curr.price}
               />
              </li>
            )
          })
        }
       </ul>
    </div>
  )
}

export default ProductList