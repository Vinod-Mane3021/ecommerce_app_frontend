export interface allSweatshirtProductTypes {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  colors: ColorsProps[];
  quantity: number;
  customerCartQuantity: number
}

export interface ColorsProps {
  name: string;
}
