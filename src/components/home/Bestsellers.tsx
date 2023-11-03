import { bestsellers } from "@/utilities/data/homePageData/bestsellers";
import { BestsellersProps } from "@/utilities/types/bestsellersTypes";
import React, { useState } from "react";
import ProductItem from "../all-sweatshirts/ProductItem";
import Link from "next/link";

const Bestsellers = () => {

  return (
    <>
      <p className="px-4 md:px-8 lg:px-16 pt-8 font-bold text-2xl">
        Shop Our Bestsellers
      </p>
      <>
        <ul className="flex flex-row overflow-x-auto px-4 md:px-16 scroll-smooth overflow-hidden gap-2 scrollbar-hide">
          {bestsellers.map((Item: BestsellersProps) => {
            return (
              <Link href={`product/${Item.id}`}>
                <ProductItem
                  key={Item.id}
                  id={Item.id}
                  image={Item.image}
                  title={Item.name}
                  price={Item.price}
                  originalPrice={Item.originPrice}
                  discount={Item.discount}
                  colors={Item.colors}
                  quantity={Item.totalQuantity}
                  customerCartQuantity = {0}
                  />
                </Link>
            );
          })}
        </ul>
        `
      </>
    </>
  );
};

export default Bestsellers;
