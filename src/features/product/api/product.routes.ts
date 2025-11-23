export const API_ROUTES = {
        PRODUCTS: "/api/products",

        PRODUCT_PATTERN: "/api/product/:id",
        PRODUCT: (id: number | string) => `/api/product/:${id}`,
}