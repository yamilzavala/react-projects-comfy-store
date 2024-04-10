import { customFetch, formatPrice } from "../../utils";
import { toast } from "react-toastify";
import {redirect} from 'react-router-dom';
import { clearCart } from "../../store/features/cart/cartSlice";

const url = 'orders';

export const actionCheckout = (store, queryClient) => async ({request}) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const {cartItems, orderTotal, numItemsInCart} = store.getState().cartState;

    const info = {
        name,
        address,
        chargeTotal: orderTotal,
        orderTotal: formatPrice(orderTotal),
        cartItems,
        numItemsInCart,
    }

    const headerInfo = {
        Authorization: `Bearer ${user.token}`,
    }

    try {
        const response = await customFetch.post(url, {data: info}, {headers: headerInfo});
        //remove query
        queryClient.removeQueries(['orders']);
        //rest of the code
        store.dispatch(clearCart())
        toast.success('order placed successfully')
        return redirect('/orders')
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'there was an error placing your order'
        toast.error(errorMessage);
        console.warn(error)
        if(error.response.status === 401 || error.response.status === 403) return redirect('/login')
        return null;
    }

}