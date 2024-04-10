import {redirect} from 'react-router-dom'
import {toast} from 'react-toastify'
import { ordersQuery } from '../../reactQuery/queryFunctions/ordersQuery';
//import { customFetch } from '../../utils';

//const url = '/orders';

// export const orderLoaders = (store) => async ({request}) => {
//     const user = store.getState().userState.user;
//     if(!user || user.username === 'demo user') {
//         toast.warn('you need to be logged first. Is do not allow see this section with guest user!')
//         return redirect('/login') 
//     }

//     const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

//     const headerInfo = {
//         Authorization: `Bearer ${user.token}`
//     }

//     try {
//         const response = await customFetch.get(url, {params, headers: headerInfo });        
//         return {orders: response.data.data, meta: response.data.meta};    
//     } catch (error) {
//         const errorMessage = error?.response?.data?.error?.message || 'there was an error loading orders'
//         toast.error(errorMessage);
//         console.warn(error)
//         if(error.response.status === 401 || error.response.status === 403) return redirect('/login')
//     }
// }

export const orderLoaders = (store, queryClient) => async ({request}) => {
    const user = store.getState().userState.user;
    if(!user || user.username === 'demo user') {
        toast.warn('you need to be logged first. Is do not allow see this section with guest user!')
        return redirect('/login') 
    }

    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

    try {
        const response = await queryClient.ensureQueryData(ordersQuery(params,user));        
        return {orders: response.data.data, meta: response.data.meta};    
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'there was an error loading orders'
        toast.error(errorMessage);
        console.warn(error)
        if(error.response.status === 401 || error.response.status === 403) return redirect('/login')
        return null;
    }
}