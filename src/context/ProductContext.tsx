import { createContext, ReactNode, useState } from "react";
import data from "../data/data";

interface Product {
  id: number | string;
  company: string;
  model: string;
  description: string;
  quantity: number;
  price: number;
  discount: number;
  discountedPrice: number;
  image: string;
}

type ProductContextType = {
  product: Product[];
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (id: number) => void;
  getTotalQuantity: () => number;
};
const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [product] = useState<Product[]>(data);
  const [cart, setCart] = useState<Product[]>([]);

  const addProductToCart = (product: Product) => {
    setCart([...cart, product]);
  };
  const removeProductFromCart = (id: number) => {};

  const getTotalQuantity = () => {
    return cart.reduce((accum, curr) => accum + curr.quantity, 0);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        cart,
        addProductToCart,
        removeProductFromCart,
        getTotalQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
