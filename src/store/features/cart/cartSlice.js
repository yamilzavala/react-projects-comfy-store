import { createSlice } from "@reduxjs/toolkit"

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {
            console.log(action)
        },
        removeItem: (state, action) => {
            console.log('remove')
        },
        editItem: (state, action) => {
            console.log('editItem')
        },
        clearCart: (state) => {
            console.log('clear items')
        },
    }
})


export const {addItem, removeItem, editItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;