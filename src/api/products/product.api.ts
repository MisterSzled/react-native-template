import { apiClient } from "@/src/api/client";
import { Product } from "./product.types.ts";

export const productApi = {
        products(): Promise<Product[]> {
                
                return apiClient.get(`/api/products`);
        },

        product(id: number): Promise<Product[]> {
                return apiClient.get(`/api/products/${id}`);
        },
}