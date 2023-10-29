"use client";
import Footer from "@/components/footer/Footer";
import AmexIcon from "@/components/icons/payments/AmexIcon";
import ApplePayIcon from "@/components/icons/payments/ApplePayIcon";
import DiscoverIcon from "@/components/icons/payments/DiscoverIcon";
import FacilitiIcon from "@/components/icons/payments/FacilitiIcon";
import MasterCardIcon from "@/components/icons/payments/MasterCardIcon";
import UpsShippingIcon from "@/components/icons/payments/UpsShippingIcon";
import VisaIcon from "@/components/icons/payments/VisaIcon";
import Spacer from "@/components/small/Spacer";
import { useAppSelector } from "@/store/hooks";
import { roundValue } from "@/utilities/functions/roundValue";
import Link from "next/link";
import React from "react";
import CartItem from "./CartItem";

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalCartItemPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalOriginalPrice = cartItems.reduce((acc, item) => acc + item.originalPrice, 0);

  const TOTAL_ORIGINAL_PRICE = roundValue(totalOriginalPrice);
  const TOTAL_CART_ITEM_PRICE = roundValue(totalCartItemPrice);
  const SALE_PRICE_DISCOUNT = roundValue( TOTAL_ORIGINAL_PRICE - TOTAL_CART_ITEM_PRICE );
  const TOTAL_CART_ITEMS = cartItems.length

  return (
    <div className="flex flex-row justify-between">
      {/* left content: Cart & delivery options  */}
      <div className="bg-[#fafafa] py-12 w-[68%] flex  px-10 flex-col justify-center items-center">
        <div className="w-[72%] flex flex-col gap-8">
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
          <Link href="#" className="text-sm text-green-500 underline hover:text-darkGray hover:no-underline duration-200">Sign in or Sign up</Link>
        </div>

        <ul className="w-[72%] mt-5 bg-white rounded-xl px-16 py-16 flex flex-col gap-5 overflow-hidden">
            <p className="text-xl font-bold text-darkGray">{TOTAL_CART_ITEMS} items</p>
          {cartItems.map((item) => (
            
            <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                originalPrice={item.originalPrice}
                price={item.price}
                quantity={item.quantity}
                title={item.title}
                colors = {item.colors}
                discount={item.discount}
            />

          ))}
        </ul>
      </div>





      {/* right content: Order summary  */}
      <div className="fixed right-0 w-[32%] flex items-center px-16 gap-5 flex-col pt-16 h-full bg-lightGray">
        <div className="flex w-full flex-col gap-8 ">
          <p className="items-start font-extrabold">Order summary</p>
          <span className="text-xs font-bold text-slate-500 flex gap-1 items-center">
            PRODUCTS •
            <p className="text-sm text-slate-600"> ${TOTAL_CART_ITEM_PRICE}</p>
          </span>
        </div>

        <span className="border-gray-300 w-full px-10 border-[1px]" />

        <div className="w-full flex flex-col gap-3 text-slate-700">
          <span className="flex text-sm justify-between w-full font-semibold">
            <p className="">{TOTAL_CART_ITEMS} items</p>
            <p>${TOTAL_ORIGINAL_PRICE}.00</p>
          </span>
          <span className="flex text-sm justify-between w-full text-slate-500">
            <p className="">Shipping</p>
            <p>Free</p>
          </span>
          <span className="flex text-sm justify-between w-full text-slate-500">
            <p className="">SALE PRICE DISCOUNT:</p>
            <p>-${SALE_PRICE_DISCOUNT}</p>
          </span>
          <p className="text-sm text-slate-500">
            Taxes will be calculated at checkout based on your location
          </p>
          <span className="flex text-sm justify-between w-full text-darkGray font-bold">
            <p className="">Estimated total</p>
            <p>${TOTAL_CART_ITEM_PRICE}</p>
          </span>

          {/* payments options */}
          <div className="flex w-full justify-center overflow-visible gap-2 mt-2">
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <VisaIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <ApplePayIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <MasterCardIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <AmexIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <DiscoverIcon />
            </div>
          </div>
          {/* spacial offer */}
          <div className="flex bg-white py-3 px-2 items-center justify-center gap-2 mt-2">
            <p className="text-sm">
              Pay as low as $126/mo.{" "}
              <Link className="text-gray-500 underline" href="#">
                Learn more
              </Link>
            </p>
            <span className=" bg-red-200 h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <MasterCardIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
