import { setupServer } from "msw/native";

import { productMockApi } from "./products/product.mocks";

export const allMockApi = [
        ...productMockApi
]

export const mockServer = setupServer(...allMockApi);