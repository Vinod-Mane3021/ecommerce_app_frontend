export interface BestsellersProps {
  id: number;
  image: string;
  name: string;
  price: number;
  originPrice: number;
  discount: number;
  totalQuantity: number;
  colors: ColorsProps[]
}

interface ColorsProps {
  name: string
}
