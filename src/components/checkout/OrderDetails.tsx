import { useAppSelector } from "@/store/hooks";
import { roundValue } from "@/utilities/functions/roundValue";
import React from "react";

interface Props {
  TOTAL_CART_ITEMS: number;
  TOTAL_ORIGINAL_PRICE: number;
  SALE_PRICE_DISCOUNT: number;
  TOTAL_CART_ITEM_PRICE: number;
}

const OrderSummary = ({
  TOTAL_CART_ITEMS,
  TOTAL_ORIGINAL_PRICE,
  SALE_PRICE_DISCOUNT,
  TOTAL_CART_ITEM_PRICE,
}: Props) => {
  return (
    <>
      <span className="flex text-sm justify-between w-full font-semibold">
        {TOTAL_CART_ITEMS == 1 ? (
          <p className="">{TOTAL_CART_ITEMS} item</p>
        ) : (
          <p className="">{TOTAL_CART_ITEMS} items</p>
        )}

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
    </>
  );
};

export default OrderSummary;
