import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BasketProducts from './components/BasketProducts';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { useEffect } from 'react';
import { updateTotal } from './features/basketSlice';

function App() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])

  return (
    <div className="App">
      <Navbar />
      <Products />
      <BasketProducts />
    </div>
  );
}

export default App;
