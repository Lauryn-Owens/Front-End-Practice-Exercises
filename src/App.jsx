import './App.css';
import ProductList from './components/productList/productList';

function App() {

  return (
    <div className='bg-rose-50'>
      <main className='font-redHatText tracking-wide'>
        <ProductList/>
      </main>
      <aside></aside>
    </div>
  )
}

export default App
