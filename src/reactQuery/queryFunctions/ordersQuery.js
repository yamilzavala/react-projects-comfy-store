import { customFetch } from "../../utils"

export const ordersQuery = (params, user) => {
    const {page} = params;

    return {
        queryKey: [
            'orders',
            parseInt(page) ?? 1,
            user.username,
        ],
        queryFn: () => customFetch.get('/orders', {
            params, 
            headers: {
               Authorization: `Bearer ${user.token}`     
            }
        })
    }
}