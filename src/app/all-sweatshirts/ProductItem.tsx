"use client";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import DiscountOfferBox from "@/components/home/DiscountOfferBox";
import FilledFavoriteIcon from "@/components/icons/other/FilledFavoriteIcon";
import { addToCart } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import FavoriteSvg from "@/utilities/svgIcons/FavoriteSvg";
import { allSweatshirtProductTypes } from "@/utilities/types/allSweatshirtProductTypes";
import { BestsellersProps } from "@/utilities/types/bestsellersTypes";
import React, { useState } from "react";

const ProductItem = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  colors,
  quantity,
}: allSweatshirtProductTypes) => {
  const [FavoriteAdded, setFavoriteAdded] = useState(false);

  const dispatch = useAppDispatch();

  const handleFavoriteItem = () => {
    console.log("handle Favorite Item");
    setFavoriteAdded(!FavoriteAdded);
  };

  const handleAddToCart = () => {
    console.log("handle Add To Cart");
  };
  return (
    <li className="flex flex-col gap-2 border items-center border-transparent hover:cursor-pointer hover:bg-gray-100 hover:border-gray-200 duration-500 ease-in-out">
      <div className="relative">
        <img
          className="min-w-[150px] md:min-w-[220px] xl:min-w-[280px]"
          src={image}
          alt={title}
        />
        <div
          className="absolute top-2 right-2 md:top-5 md:right-5 hover:bg-gray-300 p-2 rounded-full duration-300"
          onClick={handleFavoriteItem}
        >
          {!FavoriteAdded && <FavoriteSvg height="22px" width="22px" />}
          {FavoriteAdded && <FilledFavoriteIcon height="23px" width="23px" />}
        </div>
      </div>

      <div className="px-2 py-2 flex flex-col gap-2 h-full w-full justify-between">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs md:text-sm lg:text-base">{title}</p>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-1 md:gap-2 items-center">
              <p className="text-green-800 text-[10px] md:text-sm lg:text-base font-bold">
                ${price}
              </p>
              <p className="text-[9px] sm:text-xs md:text-sm lg:text-base line-through text-gray-600">
                ${originalPrice}.00
              </p>
              <DiscountOfferBox discount={discount} />
            </div>
            <span className="px-2 py-1 rounded-full bg-gray-200 flex items-center justify-center">
              <p className=" text-[10px] sm:text-xs md:text-sm">{quantity}</p>
            </span>
          </div>
        </div>

      </div>
    </li>
  );
};

export default ProductItem;
