import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Product from "../components/Product";

const Main: React.FC = () => {
  const [index, setIndex] = useState<number>(1);

  const handleIndexIncrease = () => {
    if (index >= 4) {
      setIndex((prevIndex) => prevIndex - 4);
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleIndexDecrease = () => {
    if (index <= 1) {
      setIndex((prevIndex) => prevIndex + 4);
    }
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <main>
      <section className="main__container">
        <figure className="product__image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/image-product-${index}.jpg`}
            alt="shoe"
          />
          <div className="sliders__buttons">
            <button onClick={handleIndexDecrease}>
              <FaChevronLeft />
            </button>
            <button onClick={handleIndexIncrease}>
              <FaChevronRight />
            </button>
          </div>
        </figure>
        <div className="container">
          <Product />
        </div>
      </section>
    </main>
  );
};

export default Main;
