"use client";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import DiscountOfferBox from "@/components/home/DiscountOfferBox";
import FilledFavoriteIcon from "@/components/icons/other/FilledFavoriteIcon";
import FavoriteSvg from "@/utilities/svgIcons/FavoriteSvg";
import { BestsellersProps } from "@/utilities/types/bestsellersTypes";
import React, { useState } from "react";

const ProductItem = ({
  image,
  name,
  price,
  originPrice,
  discount,
  colors,
  totalQuantity,
}: BestsellersProps) => {
  const [FavoriteAdded, setFavoriteAdded] = useState(false);

  const handleFavoriteItem = () => {
    console.log("handle Favorite Item");
    setFavoriteAdded(!FavoriteAdded);
  };

  const handleAddToCart = () => {
    console.log("handle Add To Cart");
  };
  return (
    <li className="flex flex-col gap-0 sm:gap-2 border items-center border-transparent hover:cursor-pointer hover:bg-gray-100 hover:border-gray-200 duration-500 ease-in-out">
      <div className="relative">
        <img
          className="min-w-[200px] md:min-w-[230px] xl:min-w-[280px]"
          src={image}
          alt={name}
        />
        <div
          className="absolute top-2 right-2 md:top-5 md:right-5 hover:bg-gray-300 p-2 rounded-full duration-300"
          onClick={handleFavoriteItem}
        >
          {!FavoriteAdded && <FavoriteSvg height="22px" width="22px" />}
          {FavoriteAdded && <FilledFavoriteIcon height="23px" width="23px" />}
        </div>
      </div>

      <div className="px-2 py-2 flex flex-col h-full w-full justify-between">
        <p className="text-xs md:text-sm lg:text-base">{name}</p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-1 md:gap-2 items-center">
              <p className="text-green-800 text-xs md:text-sm lg:text-base font-bold">
                ${price}
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base line-through text-gray-600">
                ${originPrice}.00
              </p>
              <DiscountOfferBox discount={discount} />
            </div>
            <div className="bg-gray-200 rounded-full p-1">
              <p className="text-[10px] sm:text-xs md:text-xs lg:text-xs font-semibold">{totalQuantity}</p>
            </div>
          </div>

          <div className="flex gap-5 items-center justify-between">
            <span className="flex gap-2">
              <p className="text-xs md:text-sm lg:text-base">
                colors : {colors}
              </p>
            </span>
            <AddToCartButton handleAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
