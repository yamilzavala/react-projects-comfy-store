import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
            },
            {
                path: 'products',
                element: <Products/>,
            },
            {
                path: 'products/:id',
                element: <SingleProduct/>,
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