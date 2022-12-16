import Product from "../components/Product";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Main: React.FC = () => {
  const product = useContext(ProductContext);
  return (
    <main className="main">
      <div className="container">
        <section className="main__content-desktop">
          <div className="product__image-desktop">
            <figure onClick={() => product?.setShowModal(!product?.showModal)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/image-product-${product?.index}.jpg`}
                alt="shoe"
              />
            </figure>
            <div className="slider__buttons-desktop">
              <button onClick={() => product?.setIndex(1)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/image-product-1-thumbnail.jpg`}
                  alt="shoe"
                />
              </button>
              <button onClick={() => product?.setIndex(2)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/image-product-2-thumbnail.jpg`}
                  alt="shoe"
                />
              </button>
              <button onClick={() => product?.setIndex(3)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/image-product-3-thumbnail.jpg`}
                  alt="shoe"
                />
              </button>
              <button onClick={() => product?.setIndex(4)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/image-product-4-thumbnail.jpg`}
                  alt="shoe"
                />
              </button>
            </div>
          </div>
          <div className="product__component">
            <Product />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
