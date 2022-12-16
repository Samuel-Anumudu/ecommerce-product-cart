import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import Button from "./ui/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Product: React.FC = () => {
  const product = useContext(ProductContext);
  const [updatedQuantity, setUpdatedQuantity] = useState<number>(1);

  const incrementQuantity = () => {
    setUpdatedQuantity((prevQty) => prevQty + 1);
  };

  const decrementQuantity = () => {
    if (updatedQuantity <= 1) return;
    setUpdatedQuantity((prevQty) => prevQty - 1);
  };

  return (
    <section>
      {product?.product.map((p) => (
        <div key={p.id}>
          <div className="product__desc">
            <h4>{p.company}</h4>
            <h2>{p.model}</h2>
            <p>{p.description}</p>
          </div>
          <div className="product__pricing">
            <div className="product__pricing-discount">
              <h2>${p.discountedPrice}.00</h2>
              <span>{p.discount}%</span>
            </div>
            <span style={{ textDecoration: "line-through" }}>
              ${p.price}.00
            </span>
          </div>
          <div className="product__qty">
            <button
              type="button"
              onClick={decrementQuantity}
              disabled={updatedQuantity <= 1}
            >
              <FaMinus />
            </button>
            <span>{updatedQuantity}</span>
            <button type="button" onClick={incrementQuantity}>
              <FaPlus />
            </button>
          </div>
          <div
            style={{ display: "inline-block" }}
            className="add__to__cart"
            onClick={() =>
              product.addProductToCart({
                ...p,
                id: uuidv4(),
                quantity: updatedQuantity,
              })
            }
          >
            <Button
              name="Add to cart"
              icon={
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#fff"
                    fillRule="nonzero"
                  />
                </svg>
              }
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
