import React, { useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { allSweatshirtProductTypes } from "@/utilities/types/allSweatshirtProductTypes";
import AuthCheck from "./AuthCheck";

interface Props {
  TOTAL_CART_ITEMS: number;
  cartItems: allSweatshirtProductTypes[];
}

const CartAndDeliveryOptions = ({ TOTAL_CART_ITEMS, cartItems }: Props) => {

  const [auth, setAuth] = useState(true)

  return (
    <div className="bg-[#fafafa] pt-6 lg:py-12 w-full lg:w-[65%] flex gap-2 px-4 md:p-6 xl:px-10 flex-col justify-center items-center">
      <div className="w-full xl:w-[72%] flex flex-col gap-8">
        <div className="flex items-center gap-5">
          <p className="bg-green-600 w-fit p-[8px] text-xs font-bold text-white rounded-full">
            1/3
          </p>
          <p className="text-darkGray font-extrabold text-lg">
            Cart & delivery options
          </p>
        </div>
        <p className="text-sm">
          Join Le Club Lacoste now to enjoy exclusive gifts and products and
          access our new collections before everyone else!
        </p>
        <Link
          href="#"
          className="text-sm text-green-500 underline hover:text-darkGray hover:no-underline duration-200"
        >
          Sign in or Sign up
        </Link>
      </div>

      <ul className="w-full xl:w-[72%] mt-5 shadow-md bg-white rounded-xl px-4 lg:px-16 py-6 lg:py-16 flex flex-col gap-5 overflow-hidden">
        <p className="text-base lg:text-xl font-bold text-darkGray">
          {TOTAL_CART_ITEMS} items
        </p>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            originalPrice={item.originalPrice}
            price={item.price}
            quantity={item.quantity}
            title={item.title}
            colors={item.colors}
            discount={item.discount}
          />
        ))}
      </ul>

      {auth && <AuthCheck />}
    </div>
  );
};

export default CartAndDeliveryOptions;
