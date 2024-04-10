import { singleProductQuery } from "../../reactQuery/queryFunctions/singleProductQuery";
// import { customFetch } from "../../utils";

// export const singleProductLoader = async (request) => {
//     const {id} = request.params;    
//     const response = await customFetch(`/products/${id}`)
//     const product = response.data.data;
//     return {product}
// }

export const singleProductLoader = (queryClient) => async (request) => {
    const {id} = request.params;    
    const response = await queryClient.ensureQueryData(singleProductQuery(id))
    const product = response.data.data;
    return {product}
}