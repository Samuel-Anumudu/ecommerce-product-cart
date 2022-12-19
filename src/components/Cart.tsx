import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { FaTrash } from "react-icons/fa";
import Button from "./ui/Button";

const Cart: React.FC = () => {
  const product = useContext(ProductContext);

  return (
    <div className="cart">
      <h4>Cart</h4>
      <div className="divider"></div>
      <div className="container cart__content">
        {!product?.cart.length ? (
          <div className="cart__empty">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            {product?.cart.map((p) => (
              <div key={p.id} className="cart__items">
                <figure>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/image-product-1-thumbnail.jpg`}
                    alt="product"
                  />
                </figure>
                <div className="cart__items-text">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    ${p.discountedPrice}.00 x {p.quantity}
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: "10px",
                        fontWeight: "bold",
                        color: "var(--very-dark-blue)",
                      }}
                    >
                      ${p.discountedPrice * p.quantity}.00
                    </span>
                  </p>
                </div>
                <button
                  title="delete"
                  className="delete__item"
                  onClick={() => product.removeProductFromCart(p.id)}
                >
                  <FaTrash style={{ color: "var(--grayish-blue)" }} />
                </button>
              </div>
            ))}
            <div className="checkout__btn">
              <Button name="Checkout" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
