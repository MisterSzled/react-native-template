import { apiClient } from "@/src/api/client";
import { Product, ProductsSchema, ProductSchema } from "./product.schema";

export const productApi = {
        async products(): Promise<Product[]> {
                const data = await apiClient.get(`/api/products`);
                const parsed = ProductsSchema.parse(data);
                return parsed;
        },

        async product(id: number): Promise<Product> {
                const data = await apiClient.get(`/api/products/${id}`);
                const parsed = ProductSchema.parse(data);
                return parsed;
        },
}