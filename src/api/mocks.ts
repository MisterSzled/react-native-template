import { setupServer } from "msw/native";

import { productMockApi } from "./product/product.mocks";

export const allMockApi = [
        ...productMockApi
]

export const mockServer = setupServer(...allMockApi);