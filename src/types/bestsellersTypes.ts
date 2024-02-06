export interface BestsellersProps {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productOriginalPrice: number;
  productDiscount: number;
  productTotalQuantity: number;
  productColorList: productColorList[];
  productCategory: productCategory;
}

export interface productColorList {
  productColorId: number;
  productColorName: string;
}
export interface productCategory {
  productCategoryId: number;
  productCategoryName: string;
}
