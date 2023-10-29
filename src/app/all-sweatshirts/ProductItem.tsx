"use client";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import DiscountOfferBox from "@/components/home/DiscountOfferBox";
import FilledFavoriteIcon from "@/components/icons/other/FilledFavoriteIcon";
import { addToCart } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import FavoriteSvg from "@/utilities/svgIcons/FavoriteSvg";
import { BestsellersProps } from "@/utilities/types/bestsellersTypes";
import React, { useState } from "react";

const ProductItem = ({
  id,
  image,
  name,
  price,
  originPrice,
  discount,
  colorQuantity,
  totalQuantity,
}: BestsellersProps) => {
  const [FavoriteAdded, setFavoriteAdded] = useState(false);

  const dispatch = useAppDispatch();

  const handleFavoriteItem = () => {
    console.log("handle Favorite Item");
    setFavoriteAdded(!FavoriteAdded);
  };

  const handleAddToCart = () => {
    console.log("handle Add To Cart");
    // dispatch(
    //   addToCart({
    //     id: id,
    //     name: name,
    //     image: image,
    //     price: price,
    //     originalPrice: originPrice,
    //     color: "red",
    //     size: "xl",
    //     totalQuantity: totalQuantity,
    //     userSelectedProductQuantity: 1
    //   })
    // );
  };
  return (
    <li className="flex flex-col gap-2 border items-center border-transparent hover:cursor-pointer hover:bg-gray-100 hover:border-gray-200 duration-500 ease-in-out">
      <div className="relative">
        <img
          className="min-w-[150px] md:min-w-[220px] xl:min-w-[280px]"
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

      <div className="px-2 py-2 flex flex-col gap-2 h-full w-full justify-between">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xs md:text-sm lg:text-base">{name}</p>
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
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between">
          <span className="flex gap-2">
            <p className="text-xs md:text-sm lg:text-base">
              colors : {colorQuantity}
            </p>
            <p className="pl-5 text-[10px] sm:text-xs md:text-sm lg:text-base hidden sm:block">
              quantity:{totalQuantity}
            </p>
          </span>
          <AddToCartButton handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
