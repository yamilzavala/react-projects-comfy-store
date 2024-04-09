import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProductPage } from '../pages';
import { ErrorElement } from '../components';
import {store} from '../store/store'
//loaders
import { landingLoader } from './loaders/landingLoader';
import { singleProductLoader } from './loaders/singleProductLoader';
import { productsLoader } from './loaders/productsLoader';
import { checkoutLoader } from './loaders/checkoutLoader';
import { orderLoaders } from './loaders/ordersLoader';
//actions
import { actionRegister } from './actions/actionRegister';
import { actionLogin } from './actions/actionLogin';
import { actionCheckout } from './actions/actionCheckout';


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
                errorElement: <ErrorElement/>,
            },
            {
                path: 'products',
                element: <Products/>,
                errorElement: <ErrorElement/>,
                loader: productsLoader,
            },
            {
                path: 'products/:id',
                element: <SingleProductPage/>,
                loader: singleProductLoader,
                errorElement: <ErrorElement/>,
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
              loader: checkoutLoader(store),              
              action: actionCheckout(store)
            },
            {
              path: 'orders',
              element: <Orders />,
              loader: orderLoaders(store)
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
        // errorElement: <Error />,
        action: actionLogin(store),
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
        action: actionRegister,
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