"use client";
import PayButton from "@/components/buttons/PayButton";
import CartAndDeliveryOptions from "@/components/checkout/CartAndDeliveryOptions";
import OrderSummary from "@/components/checkout/OrderDetails";
import PaymentsOptions from "@/components/checkout/PaymentsOptions";
import ProductPricing from "@/components/checkout/ProductPricing";
import SpacialOffer from "@/components/checkout/SpacialOffer";
import { useAppSelector } from "@/store/hooks";
import { roundValue } from "@/utilities/functions/roundValue";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import React, { useState } from "react";

const Checkout = () => {

  const cartItems: allSweatshirtProductTypes[] = useAppSelector(state => state.cart.cartItems);
  const totalCartItemPrice = cartItems.reduce((acc, item) => acc + item.price * item.customerCartQuantity, 0);
  const totalOriginalPrice = cartItems.reduce((acc, item) => acc + item.originalPrice * item.customerCartQuantity, 0);

  const TOTAL_ORIGINAL_PRICE = roundValue(totalOriginalPrice);
  const TOTAL_CART_ITEM_PRICE = roundValue(totalCartItemPrice);
  const SALE_PRICE_DISCOUNT = roundValue(TOTAL_ORIGINAL_PRICE - TOTAL_CART_ITEM_PRICE);
  const TOTAL_CART_ITEMS = cartItems.reduce((acc, item) => {
    return acc + item.customerCartQuantity
  }, 0)

  const handlePayment = () => {
    console.log("TOTAL_CART_ITEM_PRICE : ", TOTAL_CART_ITEM_PRICE)
    console.log("total cart items : ", cartItems)
  }

  const handleMenuToggle = () => {

  }

  return (
    <div className="flex flex-col w-full lg:flex-row justify-between bg-[#fafafa]">
      {/* left content: Cart & delivery options  */}
      <CartAndDeliveryOptions
        TOTAL_CART_ITEMS={TOTAL_CART_ITEMS}
        cartItems={cartItems}
        totalCartItems={TOTAL_CART_ITEMS}
      />

      {/* right content: Order summary  */}
      <div className="lg:fixed py-8 right-0 w-full rounded-t-3xl lg:w-[35%] flex items-center px-8 xl:px-16 gap-5 flex-col lg:pt-10 h-full bg-lightGray">
        {/* product pricing */}
        <ProductPricing TOTAL_CART_ITEM_PRICE={TOTAL_CART_ITEM_PRICE} />
        {/* order details */}
        <OrderSummary
          SALE_PRICE_DISCOUNT={SALE_PRICE_DISCOUNT}
          TOTAL_CART_ITEMS={TOTAL_CART_ITEMS}
          TOTAL_CART_ITEM_PRICE={TOTAL_CART_ITEM_PRICE}
          TOTAL_ORIGINAL_PRICE={TOTAL_ORIGINAL_PRICE}
        />
        {/* payments options */}
        <PaymentsOptions />
        {/* Pay button */}
        <PayButton handlePayment={handlePayment} />
        {/* spacial offer */}
        <SpacialOffer />
      </div>
    </div>
  );
};

export default Checkout;
