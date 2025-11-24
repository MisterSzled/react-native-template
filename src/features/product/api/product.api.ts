import { apiClient } from "@/src/api/client";
import { Product, ProductSchema, ProductsSchema } from "../schema";
import { contract } from "./product.contract";

export const productApi = {
        async products(): Promise<Product[]> {
                const data = await apiClient.get(contract.products.route!());
                return ProductsSchema.parse(data);
        },

        async product(id: number): Promise<Product> {
                const data = await apiClient.get(contract.product.route!(id));
                return ProductSchema.parse(data);
        },
}