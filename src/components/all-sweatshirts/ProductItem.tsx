"use client";
import DiscountOfferBox from "@/components/home/DiscountOfferBox";
import FilledFavoriteIcon from "@/components/icons/other/FilledFavoriteIcon";
import { useAppDispatch } from "@/store/hooks";
import FavoriteSvg from "../../../public/svgIcons/FavoriteSvg";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import React, { useState } from "react";
import Image from "next/image";

const ProductItem = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
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
  return (  // hover:bg-gray-100
    <li className="flex flex-col relative gap-2 border items-center border-transparent hover:cursor-pointer hover:border-green-200 duration-500 ease-in-out">
      <div className="">
        <div className="h-72 w-full overflow-hidden min-w-100 md:min-w-150 xl:min-w-150">
          {image ? (<Image
            className="m-auto pt-2 flex"
            height={200}   
            width={200}  
            src={image}
            alt={title}   
          />) : 
          <p>image: {title}</p>
          }  
        </div>
        {/* <img src={image} alt="" /> */}
      <div
          className="absolute top-2 right-2 md:top-5 md:right-1 hover:bg-gray-100 p-2 rounded-full duration-300"
          onClick={handleFavoriteItem}
        >
          {!FavoriteAdded && <FavoriteSvg height="22px" width="22px" />}
          {FavoriteAdded && <FilledFavoriteIcon height="23px" width="23px" />}
        </div>
      </div>

      <div className="px-2 py-2 flex flex-col gap-2 h-full w-full items-end justify-end">
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
            <span className="px-[7px] py-[5px] rounded-full bg-gray-200 flex items-center justify-center">
              <p className=" text-[10px] sm:text-xs">{quantity}</p>
            </span>
          </div>
        </div>

      </div>
    </li>
  );
};

export default ProductItem;
