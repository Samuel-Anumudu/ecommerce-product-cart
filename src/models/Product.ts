export interface Product {
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
