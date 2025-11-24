import { HTTP_STATUS } from "@/src/api/http/codes";
import { create_mocks_from_contract, HandlerContext, mock } from "@/src/api/mock/factory";
import { registerMocks } from "@src/api/mock/registry";
import { LoginRequest } from "../schema";
import { contract } from "./auth.contract";

export const authMocks = {
        login: async (context: HandlerContext) => {
                const { username, password } = await context.request.json() as LoginRequest;
                if (username === "demo" && password === "demo") {
                        return {
                                token: "demo",
                                userId: "demo",
                                username: "Demoman"
                        }
                }

                return mock.error(HTTP_STATUS.UNAUTHORIZED, "User not found or authorized");
        },

        logout: async () => {
                return {

                }
        }
}

export const authMockApi = create_mocks_from_contract(contract, authMocks)

registerMocks(() => authMockApi);