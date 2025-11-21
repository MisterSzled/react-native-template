import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { productApi } from "./product.api";
import { Product } from "./product.schema";

export function useProducts(options?: UseQueryOptions<Product[], Error>) {
        return useQuery<Product[], Error>({
                queryKey: ["products"],
                queryFn: () => productApi.products(),
                staleTime: 1000 * 60 * 5,
                ...options
        });
}

export function useProduct(
        id: number, 
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