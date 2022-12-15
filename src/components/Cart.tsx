import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Cart: React.FC = () => {
  const product = useContext(ProductContext);

  return (
    <div className="cart">
      <h4>Cart</h4>
      <div className="divider"></div>
      <div className="container">
        {!product?.cart.length ? (
          <div className="cart__empty">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div>Hi</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
