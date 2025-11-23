import { apiClient } from "@/src/api/client";
import { Product, ProductSchema, ProductsSchema } from "../schema";
import { API_ROUTES } from "./product.routes";

export const productApi = {
        async products(): Promise<Product[]> {
                const data = await apiClient.get(API_ROUTES.PRODUCTS);
                return ProductsSchema.parse(data);
        },

        async product(id: number): Promise<Product> {
                const data = await apiClient.get(API_ROUTES.PRODUCT(id));
                return ProductSchema.parse(data);
        },
}