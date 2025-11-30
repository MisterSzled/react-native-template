import { HandlerContext } from "@/src/api/mock/factory";
import products_json from "./data/products.json";

export const product = {
        delay: 0,
        handler: async (context: HandlerContext) => (products_json.data.find(val => val.slug === context.params.id))
};