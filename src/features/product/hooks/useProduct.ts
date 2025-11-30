import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { productApi } from "../api/product.api";
import { Product } from "../schema";

export function useProduct(
        id: string,
        options?: UseQueryOptions<Product, Error>
) {
        return useQuery<Product, Error>({
                queryKey: ["products", id],
                queryFn: () => productApi.product(id),
                enabled: Boolean(id),
                staleTime: 1000 * 60 * 5,
                ...options
        });
}