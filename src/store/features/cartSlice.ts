import { CategoryProps } from '@/utilities/types/navBarTypes'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface CartItemsProps {
    id: number
    name: string
    image: string
    price: number
    originalPrice: number
    color: string
    size: string
    totalQuantity: number
    userSelectedProductQuantity: number
}

interface CartState {
    cartItems: CartItemsProps[]
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
        addToCart: ((state, action: PayloadAction<CartItemsProps>) => {
            const existingCartItem = state.cartItems.find((item) => {
                return (item.id === action.payload.id)
            })
            if(existingCartItem) {
                console.log("existingCartItem")
                existingCartItem.userSelectedProductQuantity += action.payload.userSelectedProductQuantity
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



