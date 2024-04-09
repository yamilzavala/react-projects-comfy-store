import React from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import {FormInput,SubmitBtn} from '../components';
import {useDispatch} from 'react-redux';
import { customFetch } from '../utils';
import { loginUser } from '../store/features/user/userSlice';
import {toast} from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const loginGuest = async () => {
        const data = {
            identifier: 'test@test.com',
            password: 'secret'
        }
        try {
            const response = await customFetch.post('/auth/local', data)
            dispatch(loginUser(response.data))
            toast.success('guest user logged!')
            navigate('/')      
        } catch (error) {
            const errorMessage = error?.response?.data?.error?.message || 'please double check your credentials';
            toast.error(errorMessage)
        }
    } 

    return (
        <>
           <section className="h-screen grid place-items-center">
                <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
                    <h4 className="text-center text-3xl font-bold">Login</h4>
                    <FormInput type='email' label='email' name='identifier' size='large'/>
                    <FormInput type='password' label='password' name='password' size='large'/>
                    <div className='mt-4'>
                        <SubmitBtn text='login'/>
                    </div>
                    <button onClick={loginGuest} type='button' className='btn btn-secondary btn-block'>guest user</button>
                    <p className='text-center'>
                        Not a member yet?
                        <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>register</Link>
                    </p>
                </Form>
            </section>
        </>
    );
};

export default Login;