"use client";
import React, { useEffect, useRef } from "react";
import CartIconSvg from "../../../../public/svgIcons/CartIconSvg";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

const CartIcon = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const totalCartItems = cartItems.reduce((acc, item) => {
    return acc + item.customerCartQuantity
  }, 0)
  return (
    <Link href="/checkout" className="relative p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300">
      <div className="rounded-full h-4 w-4 bg-darkGray flex items-center justify-center absolute left-6 bottom-5">
        <p className="text-white" style={{fontSize: 10}}>{totalCartItems}</p>
      </div>
      <CartIconSvg/>
    </Link>
  );
};

export default CartIcon;
