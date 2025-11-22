import { z } from "zod";

export const ProductSchema = z.object({
        id: z.string(),
        name: z.string(),
});

export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsSchema>;