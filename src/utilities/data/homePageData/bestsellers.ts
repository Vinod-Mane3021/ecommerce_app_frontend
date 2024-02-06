import { BestsellersProps } from "../../../types/bestsellersTypes";

interface Props {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productOriginalPrice: number;
  productDiscount: number;
  productTotalQuantity: number;
  productColorList: ProductColor[];
  productCategory: {
    productCategoryId: number;
    productCategoryName: string;
  };
}

interface ProductColor {
  productColorId: number;
  productColor: string;
}

export const bestsellers: Props[] = [
  {
    productId: 1,
    productName: "Men's Concours Loafers",
    productImage: "/images/homePage/bestsellers/MensConcoursLoafers.png",
    productPrice: 74.99,
    productOriginalPrice: 100,
    productDiscount: 25,
    productTotalQuantity: 90,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 2, productColor: "Grey Chine • CCA" },
      { productColorId: 3, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 2,
    productName: "Men's Classic Fit Cotton Fleece Sweatshirt",
    productImage: "/images/homePage/bestsellers/sweatshirt.png",
    productPrice: 115.99,
    productOriginalPrice: 155,
    productDiscount: 25,
    productTotalQuantity: 210,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 3,
    productImage: "/images/homePage/bestsellers/mensSlipOn.png",
    productName: "Men's Tatalya Leather Slip-On",
    productPrice: 44.99,
    productOriginalPrice: 75,
    productDiscount: 40,
    productTotalQuantity: 150,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 4,
    productImage: "/images/homePage/bestsellers/poloTShirt1.png",
    productName: "Men's Original L.12.12 Slim Fit Petit Piqué Cotton Polo",
    productPrice: 43.99,
    productOriginalPrice: 110,
    productDiscount: 25,
    productTotalQuantity: 120,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 5,
    productImage: "/images/homePage/bestsellers/poloTShirt2.png",
    productName: "Men's Original L. 12.12 Heathered Petit Piqué Cotton Polo",
    productPrice: 54.99,
    productOriginalPrice: 110,
    productDiscount: 50,
    productTotalQuantity: 200,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 6,
    productImage: "/images/homePage/bestsellers/jackets.png",
    productName: "Women's Stowable Hood Puffer Jacket",
    productPrice: 209.99,
    productOriginalPrice: 350,
    productDiscount: 40,
    productTotalQuantity: 190,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 7,
    productImage: "/images/homePage/bestsellers/sneakers.png",
    productName: "Men's Lace-IJ Sneakers",
    productPrice: 50.99,
    productOriginalPrice: 85,
    productDiscount: 40,
    productTotalQuantity: 100,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 8,
    productImage: "/images/homePage/bestsellers/hoodies.png",
    productName: "Men's SPORT Lightweight Hoodie",
    productPrice: 53.99,
    productOriginalPrice: 135,
    productDiscount: 60,
    productTotalQuantity: 50,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 9,
    productImage: "/images/homePage/bestsellers/jarseyTShirt.png",
    productName: "Men's V-Neck Pima Cotton Jersey T-shirt",
    productPrice: 23.99,
    productOriginalPrice: 60,
    productDiscount: 60,
    productTotalQuantity: 40,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
  {
    productId: 10,
    productImage: "/images/homePage/bestsellers/womensSneakers.png",
    productName: "Women's Hydez Leather Sneakers",
    productPrice: 47.99,
    productOriginalPrice: 80,
    productDiscount: 40,
    productTotalQuantity: 250,
    productColorList: [
      { productColorId: 1, productColor: "Navy Blue • 166" },
      { productColorId: 1, productColor: "Grey Chine • CCA" },
      { productColorId: 1, productColor: "White • 70V" },
    ],
    productCategory: {
      productCategoryId: 1,
      productCategoryName: "bestsellers",
    },
  },
];
