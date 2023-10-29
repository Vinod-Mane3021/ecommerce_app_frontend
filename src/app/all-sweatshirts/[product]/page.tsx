"use client";
import DiscountOfferBox from "@/components/home/DiscountOfferBox";
import { allSweatshirtsData } from "@/utilities/data/productsCategory/all-sweatshirts";
import { useRouter } from "next/router";
import React from "react";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: string;
  originPrice: string;
  discount: string;
  colorQuantity: string;
  totalQuantity: string;
}
interface Props {
  product: string;
}

const ProductPage = ({ params }: { params: Props }) => {
  const product = decodeURIComponent(params.product);

  const Item = allSweatshirtsData.find((item) => item.title == product && item);

  return (
    <>
      {Item ? (
        <div className="flex px-16 py-10">
          <img src={Item.image} alt="" />
          <span className="w-fit">
            <DiscountOfferBox discount={Item.discount} />
            <p>{Item.title}</p>
            <span className="flex justify-between items-center">
                <p className="text-green-800 text-xs md:text-sm lg:text-base font-bold">${Item.price}</p>
                <p>rating 2*</p>
            </span>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base line-through text-gray-600">
                ${Item.originalPrice}.00
              </p>   
          </span>
        </div>
      ): (
        <div className="flex h-full w-full items-center justify-center">
            <p>item not found</p>
        </div>
      )}
    </>
  );
};

export default ProductPage;
