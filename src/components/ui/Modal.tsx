import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const Modal: React.FC = () => {
  const product = useContext(ProductContext);

  return (
    <div className="modal">
      <div className="modal__image">
        <div className="modal__image-top">
          <button
            type="button"
            onClick={() => product?.setShowModal(!product?.showModal)}
            className="modal__image-btn"
          >
            <FaTimes />
          </button>
          <figure>
            <img
              src={`${process.env.PUBLIC_URL}/assets/image-product-${product?.index}.jpg`}
              alt="shoe"
            />
            <div className="modal__sliders">
              <button onClick={product?.handleIndexDecrease}>
                <FaChevronLeft />
              </button>
              <button onClick={product?.handleIndexIncrease}>
                <FaChevronRight />
              </button>
            </div>
          </figure>
        </div>
        <div className="slider__buttons-desktop modal__image-bottom">
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
    </div>
  );
};

export default Modal;
