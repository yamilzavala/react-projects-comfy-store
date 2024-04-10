import { customFetch } from "../../utils"

export const allProductsQuery = (params) => {
    const { search, category, company, sort, price, shipping, page } = params;
    return {
        queryKey: [
            'products',
            search ?? '',
            category ?? 'all',
            company ?? 'all',
            sort ?? 'a-z',
            price ?? 100000,
            shipping ?? false,
            page ?? 1,
        ],
        queryFn: () => customFetch('/products', {params})
    }
}