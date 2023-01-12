import { createContext, useState } from "react";
import data from "../data/data";
import { Product } from "../models/Product";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

type ProductContextType = {
  product: Product[];
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (id: number | string) => void;
  getTotalQuantity: () => number;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleIndexDecrease: () => void;
  handleIndexIncrease: () => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [product] = useState<Product[]>(data);
  const [cart, setCart] = useState<Product[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const addProductToCart = (product: Product) => {
    setCart([...cart, product]);
  };
  const removeProductFromCart = (id: number | string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cart.reduce((accum, curr) => accum + curr.quantity, 0);
  };

  const handleIndexIncrease = () => {
    if (index && index >= 4) {
      setIndex((prevIndex) => prevIndex - 4);
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleIndexDecrease = () => {
    if (index && index <= 1) {
      setIndex((prevIndex) => prevIndex + 4);
    }
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        cart,
        index,
        showMenu,
        showModal,
        setShowMenu,
        setShowModal,
        setIndex,
        addProductToCart,
        removeProductFromCart,
        getTotalQuantity,
        handleIndexIncrease,
        handleIndexDecrease,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
