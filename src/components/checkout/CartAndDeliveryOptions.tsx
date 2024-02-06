import React, { useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import AuthCheck from "./AuthCheck";

interface Props {
  TOTAL_CART_ITEMS: number;
  cartItems: allSweatshirtProductTypes[];
  totalCartItems: number;
}

const CartAndDeliveryOptions = ({
  TOTAL_CART_ITEMS,
  cartItems,
  totalCartItems,
}: Props) => {
  const [auth, setAuth] = useState(true);

  return (
    <div className="bg-[#fafafa] py-6 lg:py-10 w-full lg:w-[65%] flex px-4 md:px-6 xl:px-10 flex-col justify-center items-center">
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

      <div className="w-full xl:w-[72%] mt-5 shadow-md bg-white rounded-xl px-4 lg:px-16 pt-6 lg:pt-16 pb-32 flex flex-col gap-5 overflow-hidden">
        {cartItems.length > 0 ? (
          <>
            <h1 className="text-base lg:text-xl flex gap-2 font-bold text-darkGray">
              {totalCartItems}
              {totalCartItems > 1 ? <p>items</p> : <p>item</p>}
            </h1>
          </>
        ) : (
          <p className="self-center text-darkGray font-semibold">
            No items added in your cart
          </p>
        )}

        <ul className="flex flex-col gap-14">
          {cartItems.map((item, index) => {
            return (
              cartItems && (
                <CartItem
                  key={index}
                  id={item.id}
                  image={item.image}
                  originalPrice={item.originalPrice}
                  price={item.price}
                  quantity={item.quantity}
                  title={item.title}
                  colors={item.colors}
                  discount={item.discount}
                  customerCartQuantity={item.customerCartQuantity}
                />
              )
            );
          })}
        </ul>
      </div>

      {auth && <AuthCheck />}
    </div>
  );
};

export default CartAndDeliveryOptions;
