import { HTTP_STATUS } from "@/src/api/http/codes";
import { registerMocks } from "@src/api/mock/registry";
import { LoginRequest } from "../schema";
import { API_ROUTES } from "./auth.routes";
import { build_mock } from "@/src/api/mock/factory";

export const authMockApi = [
        build_mock.with_status(
                API_ROUTES.LOGIN,
                "POST",
                async ({ request }) => {
                        const { username, password } = await request.json() as LoginRequest;
                        if (username === "demo" && password === "demo") {
                                return {
                                        token: "demo",
                                        userId: "demo",
                                        username: "Demoman"
                                }
                        }

                        return build_mock.with_error(HTTP_STATUS.UNAUTHORIZED, "User not found or authorized");
                },
                HTTP_STATUS.OK
        ),

        build_mock.with_status(
                API_ROUTES.LOGOUT,
                "GET",
                async ({request}) => ({}),
                HTTP_STATUS.OK 
        )
]

registerMocks(() => authMockApi);