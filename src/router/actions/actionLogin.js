import { customFetch } from "../../utils";
import {toast} from 'react-toastify'
import {redirect} from 'react-router-dom'
import { loginUser } from "../../store/features/user/userSlice";

const url = '/auth/local';

export const actionLogin = (store) => async ({request}) => {
    const formData = await request.formData()    
    const data = Object.fromEntries(formData);    
    try {
        const response = await customFetch.post(url, data);
        store.dispatch(loginUser(response.data))
        toast.success('user logged');
        return redirect('/')
    } catch (error) {
        const detailsError = error?.response?.data?.error?.details.errors;
        let errorMessage = '';
        if(detailsError.length) {
            detailsError.forEach(item => {
                errorMessage += item.message + '. ' 
            })
        } else {
            errorMessage = error?.response?.data?.error?.message || 'please double check your credentials'
        }
        toast.error(errorMessage)
        return null;
    }
} 