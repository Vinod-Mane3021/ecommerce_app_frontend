import { bestsellers } from "@/utilities/homePageData/bestsellers";
import { BestsellersProps } from "@/utilities/types/bestsellersTypes";
import React, { useState } from "react";
import BestsellerItem from "./BestsellerItem";

const Bestsellers = () => {

  return (
    <>
      <p className="px-8 md:px-16 pt-8 font-bold text-2xl">
        Shop Our Bestsellers
      </p>
      <>
        <ul className="flex flex-row overflow-x-auto px-8 md:px-16 scroll-smooth overflow-hidden gap-2 scrollbar-hide">
          {bestsellers.map((Item: BestsellersProps) => {
            return (
              <BestsellerItem
                key={Item.id}
                id={Item.id}
                image={Item.image}
                name={Item.name}
                price={Item.price}
                originPrice={Item.originPrice}
                discount={Item.discount}
                colorQuantity={Item.colorQuantity}
                totalQuantity={Item.totalQuantity}
              />
            );
          })}
        </ul>
        `
      </>
    </>
  );
};

export default Bestsellers;
