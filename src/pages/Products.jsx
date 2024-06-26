import React from 'react';
import { PaginationContainer, Filters, ProductsContainer } from '../components';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    
    return (
        <>  
            <Filters/>
            <ProductsContainer/>
            <PaginationContainer/>
        </>
    );
};

export default Products;