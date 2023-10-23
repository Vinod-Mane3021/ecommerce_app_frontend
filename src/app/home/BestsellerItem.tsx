'use client'
import AddToCartButton from "@/components/buttons/AddToCartButton";
import DiscountOfferBox from "@/components/home/DiscountOfferBox";
import FilledFavoriteIcon from "@/components/icons/FilledFavoriteIcon";
import FavoriteSvg from "@/utilities/svgIcons/FavoriteSvg";
import { BestsellersProps } from "@/utilities/types/bestsellersTypes";
import Link from "next/link";
import React, { useState } from "react";

const BestsellerItem = ({image, name, price, originPrice, discount, colorQuantity, totalQuantity } : BestsellersProps) => {
  const [FavoriteAdded, setFavoriteAdded] = useState(false)

  const handleFavoriteItem = () => {
    console.log("handle Favorite Item")
    setFavoriteAdded(!FavoriteAdded)
  }

  const handleAddToCart = () => {
    console.log('handle Add To Cart')
  }
  return (
    <li className="flex flex-col gap-2 border border-transparent hover:cursor-pointer hover:bg-gray-100 hover:border-gray-300 duration-500 ease-in-out">
        <div className="relative">
            <img 
                className="min-w-[250px] md:min-w-[330px]"
                src={image}
                alt={name}
            />
            <div className="absolute top-5 right-5 hover:bg-gray-300 p-2 rounded-full duration-300" onClick={handleFavoriteItem}>
              {!FavoriteAdded && <FavoriteSvg height="22px" width="22px"/>}
              {FavoriteAdded && <FilledFavoriteIcon height="23px" width="23px"/>}
            </div>
        </div>


      <div className="px-2 py-2 flex flex-col gap-2 justify-center">
        <p className="text-base ">{name}</p>
        <div className="flex gap-2 items-center">
          <p className="text-green-800 text-sm font-bold">${price}</p>
          <p className="text-xs line-through text-gray-600">${originPrice}.00</p>
          <DiscountOfferBox discount={discount}/>
          <p className="pl-4 text-sm">Quantity : {totalQuantity}</p>
        </div>
        <div className="flex gap-5 items-center justify-between">
          <p className="text-sm">colors : {colorQuantity}</p>
          <AddToCartButton handleAddToCart={handleAddToCart}/>
        </div>
      </div>


    </li>



  );
};

export default BestsellerItem;
