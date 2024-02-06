import { CategoryProps } from "@/types/navBarTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import { Id } from "@reduxjs/toolkit/dist/tsHelpers";

interface CartState {
  cartItems: allSweatshirtProductTypes[];
  // totalCartItems: number
}

const initialState = {
  cartItems: [],
  // totalCartItems: 0
} as CartState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<allSweatshirtProductTypes>) => {
      const selectedItem = state.cartItems.find((item) => {
        if (item.id === action.payload.id) {
          return item;
        }
        return null;
      });
      // if Item is already exist in cart, then update the product quantity
      if (selectedItem) {
        console.log("existingCartItem");
        console.log("increase product : ", selectedItem.id);
        selectedItem.customerCartQuantity += action.payload.customerCartQuantity;
        console.log("current product quantity : ", selectedItem.customerCartQuantity);
      } else {
        // if Item is not exist in cart, then add Item in cart
        console.log("not existingCartItem");
        state.cartItems.push(action.payload);
      }
    },
    updateCart: (state, action: PayloadAction<allSweatshirtProductTypes>) => {
      const selectedItem = state.cartItems.find((item) => {
        if (item.id === action.payload.id) {
          return item;
        }
        return null;
      });
      // if Item is already exist in cart, then update the product quantity
      if (selectedItem) {
        console.log("increase product : ", selectedItem.id);
        selectedItem.customerCartQuantity = action.payload.customerCartQuantity;
        console.log("current product quantity : ", selectedItem.customerCartQuantity);
      } else {
        // if Item is not exist in cart, then add Item in cart
        console.log("not existingCartItem");
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      const NotRemovableItems = state.cartItems.filter(item => item.id != productId)
      state.cartItems = NotRemovableItems
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItems

export default cartSlice.reducer;





