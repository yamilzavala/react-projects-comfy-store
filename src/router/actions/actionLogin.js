import { customFetch } from "../../utils";
import {toast} from 'react-toastify'
import {redirect} from 'react-router-dom'

const url = '/auth/local';

export const actionLogin = (store) => async ({request}) => {
    console.log(store)
    // const formData = await request.getFormData();
    // const data = Object.fromEntries(formData)
    return null;
    // try {
    //     const response = await customFetch.post(url, data);
    //     toast.success('user logged');
    //     return redirect('/')
    // } catch (error) {
    //     const errorMessage = error?.response?.data?.error?.message || 'please double check your credentials';
    //     toast.error(errorMessage)
    //     return null;
    // }
} 