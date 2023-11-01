import ArrowDownIcon from "@/components/icons/arrow/ArrowDownIcon";
import MenuDotsIcon from "@/components/icons/other/MenuDotsIcon";
import { ColorsProps, allSweatshirtProductTypes } from "@/utilities/types/allSweatshirtProductTypes";
import React from "react";
import { SourceTextModule } from "vm";

const CartItem = ({ id, image, title, price, originalPrice, quantity, discount, colors } : allSweatshirtProductTypes) => {

  const handleMenu = () => {
    console.log("handle menu")
  }

  return (
    <li key={id} className="flex gap-5">
      <span className="relative h-[150px] w-[165px] flex items-center overflow-hidden justify-center rounded-lg">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={title}
        />
      </span>


      <div className="md:text-base w-full flex flex-col justify-between">

        <div className="w-full flex flex-col gap-2">
          <span className="flex justify-between w-full">
            <p className="text-sm">{title}</p>
            <MenuDotsIcon heightWidth="17px" handleMenu={handleMenu}/>
          </span>
          <p className="text-xs text-gray-600">{colors[2].name}</p>
          <span className="flex w-full justify-between hover:cursor-pointer">
            <p className="text-xs text-gray-600">Size XS - 2</p>
            <div className="flex bg- bg-lightGray py-[3px] px-3 rounded-full items-center justify-center text-gray-700 text-sm">
              <p>{3}</p>
              <ArrowDownIcon/>
            </div>
          </span>
        </div>

        <span className="flex gap-2">
          <p className=" text-sm lg:text-base text-green-800 font-extrabold">${price}</p>
          <p className="text-xs self-end font-semibold text-gray-600 line-through">${originalPrice}</p>
        </span>

      </div>
    </li>
  );
};

export default CartItem;
