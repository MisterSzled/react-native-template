// import { setupServer } from "msw/native";

// import { productMockApi } from "@src/features/product/api/product.mocks";

// export const allMockApi = [
//         ...productMockApi
// ]

// export const mockServer = setupServer(...allMockApi);

import { setupServer } from "msw/native";
import { getMocks } from "./registry";

// Trigger registers
import "@src/features/product/api/product.mocks";

export const allMockApi = getMocks();
export const mockServer = setupServer(...allMockApi);