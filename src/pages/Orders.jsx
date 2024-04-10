import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ComplexPaginationContainer, OrdersList, SectionTitle } from '../components';

const Orders = () => {
    const {meta} = useLoaderData()

    if(meta.pagination.total < 1) return <SectionTitle text='please make an order'/>

    return (
        <>
            <SectionTitle text='your orders'/>
            <OrdersList/>
            <ComplexPaginationContainer/>
        </>
    );
};

export default Orders;