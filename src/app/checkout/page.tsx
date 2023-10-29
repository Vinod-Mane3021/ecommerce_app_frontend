"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";

const Checkout = () => {
  const cartItem = useAppSelector((state) => state.cart.cartItems);
  return (
    <div className="flex flex-row justify-between">
        {/* left content: Cart & delivery options  */}
        <div>
            <p>Cart & delivery options</p>
            <p className="text-xs">Join Le Club Lacoste now to enjoy exclusive gifts and products and access our new collections before everyone else!</p>
            <ul>
                {cartItem.map((item) => (
                    <li key={item.id} className="flex">
                    <img className="h-[300px]" src={item.image} alt={item.name} />
                    <span>
                        <p>{item.name}</p>
                        <p>price: {item.price}</p>
                        <p>originalPrice: {item.originalPrice}</p>
                        <p>totalQuantity: {item.totalQuantity}</p>
                        <p>selected Quantity : {item.userSelectedProductQuantity}</p>
                    </span>
                </li>
                ))}
            </ul>
            <p>Sign in or Sign up</p>
            <div>

            </div>
        </div>
        {/* left content: Order summary  */}
        <div>

        </div>
    </div>
  );
};

export default Checkout;
