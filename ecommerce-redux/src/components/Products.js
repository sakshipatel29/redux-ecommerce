import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, removeItem } from '../features/basketSlice';
import './Product.css';

const Products = ({ name, price, image, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={`${name} glasses`} />
      </div>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <button className="remove-btn" onClick={() => { dispatch(removeItem({ name })) }}>
          Remove
        </button>
      </div>
      <div className="product-amount">
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem({ name }));
              return;
            } else {
              dispatch(decreaseAmount({ name }));
            }
          }}
        >
          -
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => { dispatch(increaseAmount({ name })) }}>
          +
        </button>
      </div>
    </div>
  );
};

export default Products;
