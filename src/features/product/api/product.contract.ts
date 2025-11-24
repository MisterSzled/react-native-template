import { Contract } from "@/src/api/types";
import { ProductSchema, ProductsSchema } from "../schema";
import { API_ROUTES } from "./product.routes";

export const contract: Contract = {
        products: {
                method: "GET",
                pattern: API_ROUTES.PRODUCTS,
                route: () => API_ROUTES.PRODUCTS,
                response: ProductsSchema
        },

        product: {
                method: "GET",
                pattern: API_ROUTES.PRODUCT_PATTERN,
                route: (id: number) => API_ROUTES.PRODUCT(id),
                response: ProductSchema
        }
}