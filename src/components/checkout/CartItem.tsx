"use client";
import ArrowDownIcon from "@/components/icons/arrow/ArrowDownIcon";
import MenuDotsIcon from "@/components/icons/other/MenuDotsIcon";
import { addToCart, updateCart } from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { classNames } from "@/utilities/functions/classNames";
import {allSweatshirtProductTypes} from "@/types/productTypes";
import React, { useState } from "react";
import MenuToggle from "./Menu";

const CartItem = ({
  id,
  image,
  title,
  price,
  originalPrice,
  quantity,
  discount,
  colors,
  customerCartQuantity,
}: allSweatshirtProductTypes) => {
  const [isQuantityMenuPressed, setIsQuantityMenuPressed] = useState(false);
  const dispatch = useAppDispatch();
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleMenu = (index: number) => {
    setIsQuantityMenuPressed(false);
    console.log("id : " + id);
    dispatch(
      updateCart({
        id: id,
        image: image,
        title: title,
        price: price,
        originalPrice: originalPrice,
        discount: discount,
        colors: colors,
        quantity: quantity,
        customerCartQuantity: index,
      })
    );
    console.log("handle menu ", index);
  };

  return (
    <li className="flex gap-5">
      <span className="relative h-[180px] w-[175px] flex items-center overflow-hidden justify-center rounded-lg">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </span>

      <div className="md:text-base w-full flex flex-col justify-between">
        <div className="w-full flex flex-col gap-2">
          <span className="flex justify-between w-full relative">
            <p className="text-sm">{title}</p>
              <div onClick={() => setToggleMenu(!toggleMenu)}>
                <MenuDotsIcon heightWidth="17px" />
              </div>
            {toggleMenu && <MenuToggle/>}
          </span>
          <p className="text-xs text-gray-600">{colors[0].productColorName}</p>
          <span className="flex w-full justify-between hover:cursor-pointer">
            <p className="text-xs text-gray-600">Size XS - 2</p>

            <div className="flex flex-col gap-2 w-fit relative">
              {/*   */}
              <div
                onClick={() => setIsQuantityMenuPressed(!isQuantityMenuPressed)}
                className={classNames(
                  "flex bg-lightGray gap-1 py-[5px] px-[9px] border border-transparent rounded-full items-center justify-center text-gray-700 text-sm",
                  isQuantityMenuPressed && "border border-[#7e7e7e]"
                )}
              >
                <p className="text-black text-sm">
                  {customerCartQuantity ? customerCartQuantity : 0}
                </p>
                <ArrowDownIcon />
              </div>
              {isQuantityMenuPressed && (
                <menu
                  className={classNames(
                    "absolute mt-10 self-center bg-lightGray text-gray-700 text-sm rounded-lg items-center flex flex-col justify-center overflow-hidden",
                    isQuantityMenuPressed && "border border-[#7e7e7e]"
                  )}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <li
                      key={i}
                      className="hover:bg-[#7e7e7e] w-full bg-cover flex flex-col"
                      onClick={() => handleMenu(i + 1)}
                    >
                      <button className="px-[15px]">{i + 1}</button>
                    </li>
                  ))}
                </menu>
              )}
            </div>
          </span>
        </div>

        <span className="flex gap-2">
          <p className=" text-sm lg:text-base text-green-800 font-extrabold">
            ${customerCartQuantity > 0 ? customerCartQuantity * price : price}
          </p>
          <p className="text-xs self-end font-semibold text-gray-600 line-through">
            $
            {customerCartQuantity > 0
              ? customerCartQuantity * originalPrice
              : originalPrice}
            .00
          </p>
        </span>
      </div>
    </li>
  );
};

export default CartItem;
