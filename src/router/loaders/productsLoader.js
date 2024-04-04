import { customFetch } from "../../utils"

const url = '/products'

export const productsLoader = async ({request}) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    const response = await customFetch(url, {params});
    const products = response.data.data;
    const meta = response.data.meta;        
    return {products, meta, params}
}