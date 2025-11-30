import { z } from "zod";


export const ProductSchema = z.object({
        category: z.array(z.string()),
        description: z.string(),
        minPrice: z.string(),
        maxPrice: z.string(),
        currency: z.string(),
        slug: z.string(),
        id: z.string(),
        objectID: z.string(),
        name: z.string(),
        isAvailableForPurchase: z.boolean(),
        isAvailable: z.boolean(),
        thumbnail: z.object({
                url: z.string(),
                alt: z.string(),
                __typename: z.string()
        }),
        productType: z.object({
                slug: z.string(),
                hasVariants: z.boolean(),
                __typename: z.string()
        }),
        collections: z.array(
                z.object({ name: z.string(), slug: z.string(), __typename: z.string() })
        ),
        __typename: z.string()
})

export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsSchema>;