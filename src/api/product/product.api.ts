import { apiClient } from "@/src/api/client";
import { Product, ProductsSchema, ProductSchema } from "./product.schema";

export const productApi = {
        async products(): Promise<Product[]> {
                const data = await apiClient.get(`/api/products`);
                return ProductsSchema.parse(data);
        },

        async product(id: number): Promise<Product> {
                const data = await apiClient.get(`/api/products/${id}`);
                return ProductSchema.parse(data);
        },
}