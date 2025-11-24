import { create_mocks_from_contract } from "@/src/api/mock/factory";
import { registerMocks } from "@src/api/mock/registry";
import { contract } from "./product.contract";

export const productMocks = {
        products: async () => {
                return [{ name: "Test name", id: "1010101" }]
        },

        product: async () => ({ name: "Test name", id: "1010101" })
};

export const productMockApi = create_mocks_from_contract(contract, productMocks)

registerMocks(() => productMockApi);