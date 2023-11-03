export interface BestsellersProps {
  id: number;
  image: string;
  name: string;
  price: number;
  originPrice: number;
  discount: number;
  colors: ColorsProps[]
  totalQuantity: number;
}

interface ColorsProps {
  name: string
}
