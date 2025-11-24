import { setupServer } from "msw/native";
import { getMocks } from "./registry";

// Trigger registers
import "@src/features/product/api/product.mocks";
import "@src/features/auth/api/auth.mocks";

export const allMockApi = getMocks();

export const mockServer = setupServer(...allMockApi);