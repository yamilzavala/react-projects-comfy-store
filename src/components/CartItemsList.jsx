import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, removeItem } from '../store/features/cart/cartSlice';
import { formatPrice } from '../utils';
import { Link } from 'react-router-dom';


const CartItemsList = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartState.cartItems);

    return (
        <div className='mt-12 grid gap-y-8'>
            {cartItems.map(product => {
                const {image, title, price, amount, company, productColor, cartID} = product;
                const dollarsAmount = formatPrice(price);
                return (
                    <Link to={`/products/${product.id}`} key={product.id} className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'>
                        <figure className='px-4 pt-4'>
                            <img alt={title} src={image} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'/>
                        </figure>

                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capitalize font-medium text-lg'>{title}</h3>
                            <h4 className='capitalize text-md text-neutral-content'>{company}</h4>     
                                                 
                            <button onClick={() => dispatch(removeItem(cartID))}>remove</button>                            
                            
                        </div>


                        <p className='font-medium ml-0 sm:ml-auto text-lg'>
                            {dollarsAmount}
                        </p>
                    </Link>
                )
            })}
        </div>
    );
};

export default CartItemsList;