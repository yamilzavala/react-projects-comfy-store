import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { OrdersList, PaginationContainer, SectionTitle } from '../components';

const Orders = () => {
    const {data, meta} = useLoaderData()

    if(meta.pagination.total < 1) return <SectionTitle text='please make an order'/>

    return (
        <>
            <SectionTitle text='your orders'/>
            <OrdersList/>
            <PaginationContainer/>
        </>
    );
};

export default Orders;