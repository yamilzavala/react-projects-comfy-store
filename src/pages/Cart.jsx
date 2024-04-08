import React from 'react';
import { useSelector } from 'react-redux'; 
import {SectionTitle, CartItemsList, CartTotals} from '../components'
import { Link } from 'react-router-dom';


const Cart = () => {
    const numItemsInCart = useSelector(state => state.cartState.numItemsInCart);
    const user = useSelector(state => state.userState.user)

    if(numItemsInCart < 1) return <SectionTitle text='Your cart is empty'/>

    return (
        <>
            <SectionTitle text='Shopping Cart' />
            <div className='mt-8 grid gap-8  lg:grid-cols-12'>
                {/* Cart list */}
                <div className='lg:col-span-8'>
                    <CartItemsList/>
                </div>

                {/* Totals */}
                <div className='lg:col-span-4 lg:pl-4'>
                    <CartTotals/>
                    { user ? 
                    <Link to='/checkout' className='btn btn-primary btn-block mt-8'>Procede to checkout</Link> : 
                    <Link to='/login' className='btn btn-primary btn-block mt-8'>please login</Link>}
                </div>
            </div>
        </>
    );
};

export default Cart;