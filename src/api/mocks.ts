import { setupServer } from "msw/native";

import { productMockApi } from "@src/features/product/api/product.mocks";

export const allMockApi = [
        ...productMockApi
]

export const mockServer = setupServer(...allMockApi);