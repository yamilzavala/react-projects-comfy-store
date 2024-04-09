import React from 'react';
import {useSelector} from 'react-redux'
import { CartTotals, CheckoutForm, SectionTitle } from '../components';

const Checkout = () => {
    const cartTotal = useSelector(state => state.cartState.cartTotal)

    if(cartTotal < 1) return   <SectionTitle text='Your cart is empty'/>;

    return (
        <div>            
            <SectionTitle text='Place your order'/>
            <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
                <CheckoutForm/>
                <CartTotals/>
            </div>
        </div>
    );
};

export default Checkout;