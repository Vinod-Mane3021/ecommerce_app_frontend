import { CategoryProps } from '@/utilities/types/navBarTypes'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { allSweatshirtProductTypes } from '@/utilities/types/allSweatshirtProductTypes'


interface CartState {
    cartItems: allSweatshirtProductTypes[]
    // totalCartItems: number
}

const initialState: CartState = {
    cartItems: [],
    // totalCartItems: 0
} 

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: ((state, action: PayloadAction<allSweatshirtProductTypes>) => {
            const existingCartItem = state.cartItems.find((item) => {
                return (item.id === action.payload.id)
            })
            if(existingCartItem) {
                console.log("existingCartItem")
                // existingCartItem.userSelectedProductQuantity += action.payload.userSelectedProductQuantity
            } else {
                console.log("not existingCartItem")
                state.cartItems.push(action.payload)
            }
        })
    }
})

export const { addToCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.cartItems

export default cartSlice.reducer



