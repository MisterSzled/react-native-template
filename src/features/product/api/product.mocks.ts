import { create_mocks_from_contract } from "@/src/api/mock/factory";
import { register_mocks } from "@src/api/mock/registry";
import { contract } from "./product.contract";

import { products } from "./mocks/products";
import { product } from "./mocks/product";

export const productMocks = {
        products: products,
        product: product
};

export const productMockApi = create_mocks_from_contract(contract, productMocks)

register_mocks(() => productMockApi);