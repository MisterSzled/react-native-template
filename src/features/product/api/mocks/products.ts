import { HandlerContext } from "@/src/api/mock/factory";
import products_json from "./data/products.json";

export const products = {
        delay: 0,
        handler: async (_: HandlerContext) => (products_json.data)
};