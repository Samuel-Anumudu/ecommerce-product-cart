import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
const Slider: React.FC = () => {
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
  );
};

export default Slider;
