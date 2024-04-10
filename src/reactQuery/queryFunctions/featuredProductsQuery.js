import { customFetch } from "../../utils";

const url = '/products?featured=true';

export const featuredProductsQuery = {
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url)
}