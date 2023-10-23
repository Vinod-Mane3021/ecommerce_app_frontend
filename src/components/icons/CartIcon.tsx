"use client";
import React, { useEffect, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Icons from "../../../public/icons/cartIcon.svg";
import CartIconSvg from "@/utilities/svgIcons/CartIconSvg";

const CartIcon = () => {
  return (
    <div className="relative p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300">
      <div className="h-[17px] w-[17px] rounded-full bg-black flex items-center justify-center absolute left-6 bottom-5">
        <p className="text-white text-xs">{9}</p>
      </div>
      <CartIconSvg/>
    </div>
  );
};

export default CartIcon;