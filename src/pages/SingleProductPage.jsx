import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice, generateAmountOptions } from '../utils';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/features/cart/cartSlice';

const SingleProductPage = () => {
    const {product} = useLoaderData()
    const {image, title, price, description, colors, company} = product.attributes;
    const dollarsAmount = formatPrice(price);
    const [productColor, setProductColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();

    const cartProduct = {
        cartID: product.id + productColor,
        productID: product.id,
        image,
        title,
        price,
        amount,
        productColor,
        company,
      };

    const addToCart = () => {
        dispatch(addItem({ product: cartProduct }));
    };

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    return (
        <section >
            {/* breadcrumbs */}
            <div className="text-md breadcrumbs">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>

            {/* PRODUCT */}
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16'>
                {/* IMAGE */}
                <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full'/>

                {/* INFO */}
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>
                        {company}
                    </h4>

                    <p className='mt-3 text-xl'>{dollarsAmount}</p>

                    <p className='mt-6 leading-8'>{description}</p>

                    {/* COLORS */}
                    <div className='mt-6'>
                        <h4 className='text-md font-medium tracking-wider capitalize'>
                            colors
                        </h4>
                        <div className='mt-2'>
                            {colors.map(color => {
                                return (
                                    <button type='button' className={`badge  w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`} style={{backgroundColor: color}} key={color} onClick={() => setProductColor(color)}></button>
                                )
                            })}
                        </div>
                    </div>

                    {/* AMOUNT */}
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <h4 className='text-md font-medium tracking-wider capitalize'>
                                amount
                            </h4>
                        </label>
                        <select value={amount} className='select select-secondary select-bordered select-md' onChange={handleAmount}>
                            {generateAmountOptions(20)}
                        </select>
                    </div>    

                    {/* CART BUTTON */}
                    <div className='mt-10 '>
                    <button className='btn btn-secondary btn-md' onClick={addToCart}>
                        Add to bag
                    </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SingleProductPage;