import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProductPage } from '../pages';
import { ErrorElement } from '../components';
import { landingLoader } from './loaders/landingLoader';
import { singleProductLoader } from './loaders/singleProductLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                loader: landingLoader,
                errorElement: ErrorElement,
            },
            {
                path: 'products',
                element: <Products/>,
            },
            {
                path: 'products/:id',
                element: <SingleProductPage/>,
                loader: singleProductLoader,
                errorElement: ErrorElement,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            { 
                path: 'about', 
                element: <About /> 
            },
            {
              path: 'checkout',
              element: <Checkout />,
            },
            {
              path: 'orders',
              element: <Orders />,
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
    },
])

const WrapperRouter = ({children}) => {
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    );
};

export default WrapperRouter;