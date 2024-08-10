import { useContext , useState} from 'react';
import './App.css';
import CartList from './components/cart/cartList';
import ProductList from './components/productList/productList';

import { cartContext } from './context/cartContext';
import CartModal from './components/cart/cartModal';

function App() {
  const{confirmOrder, checkingOut} = useContext(cartContext);

  const[display, setDisplay] = useState(true);

  const displayHandler = () => {
     setDisplay(false);
  };

  return (
    <div className='bg-rose-50 overflow-x-hidden relative z-0'>
      <main className='font-redHatText tracking-wide lg:flex '>
      <div style={{
        pointerEvents: checkingOut ? 'none' : 'initial'
      }} className='lg:w-8/12'>
          <ProductList/>
        </div>
        <div  className='lg:w-5/12'>
            <CartList/>
        </div>
        <div className='relative'>
        {
        checkingOut ? ( 
          <CartModal displayHandler={displayHandler}/>
        ) : (
          null
        )
      }
        </div>
      </main>
    </div>
  )
}

export default App
