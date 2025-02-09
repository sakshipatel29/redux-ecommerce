import { useSelector } from "react-redux";
import Products from "./Products";
import "./BasketProducts.css";

const BasketProducts = () => {
  const { products, amount, total } = useSelector((store) => store.basket);

  return (
    <div className="basket-container">
      <div className="products-list">
        {products.map((item) => (
          <Products 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
            amount={item.amount} 
          />
        ))}
      </div>
      <div className="basket-summary">
        <label>Total Items:</label>
        <p>{amount}</p> 
        <label>Total Price:</label>
        <p>$ {total}</p>
      </div>
    </div>
  );
};

export default BasketProducts;
