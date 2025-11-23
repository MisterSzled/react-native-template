import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { productApi } from "../api/product.api";
import { Product } from "../schema";

export function useProducts(options?: UseQueryOptions<Product[], Error>) {
        return useQuery<Product[], Error>({
                queryKey: ["products"],
                queryFn: () => productApi.products(),
                staleTime: 1000 * 60 * 5,
                ...options
        });
}