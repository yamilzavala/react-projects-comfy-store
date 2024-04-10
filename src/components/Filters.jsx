import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';
import { formatPrice } from '../utils';

const Filters = () => {
    const {meta, params} = useLoaderData();
    console.log('Params from filters: ', params);
    const {category, company, order, price, search, shipping} = params;

    return (
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/*SEARCH*/}
            <FormInput type='search' name='search' label='search product' defaultValue={search} size='input-sm'/>

            {/* CATEGORIES */}
            <FormSelect name='category' label='select category' size='input-sm' list={meta.categories} defaultValue={category}/>

            {/* COMPANIES */}
            <FormSelect name='company' label='select company' size='input-sm' list={meta.companies} defaultValue={company}/>
            
            {/* ORDER BY */}
            <FormSelect name='order' label='order by' size='input-sm' list={['a-z','z-a','high','low']} defaultValue={order}/>

            {/* PRICE */}
            <FormRange label='select price' name='price' size='range-sm' defaultValue={price}/>

            {/* SHIPPING */}
            <FormCheckbox label='free shipping' name='shipping' size='checkbox-sm' defaultValue={shipping}/>

            {/*BUTTONS*/}
            <button type='submit' className='btn btn-primary btn-sm '>
                search
            </button>
            <Link to='/products' className='btn btn-accent btn-sm'>
                reset
            </Link>
        </Form>
    );
};

export default Filters;