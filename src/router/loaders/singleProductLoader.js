import { customFetch } from "../../utils";

export const singleProductLoader = async (request) => {
    const {id} = request.params;    
    const response = await customFetch(`/products/${id}`)
    const product = response.data.data;
    return {product}
}