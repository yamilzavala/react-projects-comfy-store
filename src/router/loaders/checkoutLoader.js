import {redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

export const checkoutLoader = (store) => () => {
    const user = store.getState().userState.user;
    if(!user || user.username === 'demo user') {
        toast.warn('You must be logged in to checkout')
        return redirect('/login');        
    }
    return null;
}