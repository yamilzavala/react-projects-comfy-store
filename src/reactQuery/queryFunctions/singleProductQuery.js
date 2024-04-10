import { customFetch } from "../../utils"

export const singleProductQuery = (id) => {
   return { 
        queryKey: ['singleProduct', id],
        queryFn: () => customFetch.get(`/products/${id}`)
    }
}