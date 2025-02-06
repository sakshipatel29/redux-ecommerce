import { useSelector } from "react-redux"
import Products from "./Products";

const BasketProducts = () => {
    const { products, amount, total } = useSelector((store) => store.basket);
  return (
    <div>
    <div>
      {products.map((item, i) => 
        <Products 
          key={new Date().getTime + Math.random()}
          name= {item.name}
          price= {item.price}
          image = {item.image}
          amount = {item.amount}
        />
      )}
    </div>
    <div>
      <label>Total:</label>
      <p>{amount}</p> 
      <p>$ {total}</p>
    </div>
    </div>
  )
}

export default BasketProducts;