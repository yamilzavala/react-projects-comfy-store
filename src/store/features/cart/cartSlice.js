import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
  };

const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState;
}  

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;

            const item = state.cartItems.find((i) => i.cartID === product.cartID);
            if (item) {
              item.amount += product.amount;
            } else {
              state.cartItems.push(product);
            }
            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('item added')
        },
        removeItem: (state, action) => {
            const {cartID} = action.payload;
            const item = state.cartItems.find(item => item.cartID === cartID);
            state.cartItems.filter(item => item.cartID !== cartID)
            state.numItemsInCart -= item.amount;
            state.cartTotal -= item.price * item.amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('item removed')
        },
        editItem: (state, action) => {
            const {cartID, amount} = action.payload;
            let item = state.cartItems.find(item => item.cartID === cartID);
            state.numItemsInCart -= item.amount;
            state.cartTotal -= item.price * item.amount;
            item.amount = amount; 
            state.numItemsInCart += item.amount;
            state.cartTotal += item.price * item.amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('item edited')       
        },
        clearCart: (state) => {
            localStorage.setItem('cart',  JSON.stringify(defaultState));
            return defaultState;
        },
        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            //local storage
            localStorage.setItem('cart', JSON.stringify(state))
        }
    }
})


export const {addItem, removeItem, editItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;