import { customFetch } from "../../utils";
import {toast} from 'react-toastify'
import {redirect} from 'react-router-dom'

const url = '/auth/local/register'
export const actionRegister = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData);
    try {
        const response = await customFetch.post(url, data);
        toast.success('account created successfully!');
        return redirect('/login')
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'please double check your credentials';
        toast.error(errorMessage)
        return null;
    }
}