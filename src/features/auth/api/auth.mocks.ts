import { registerMocks } from "@src/api/mock/registry";
import { http, HttpResponse } from "msw";
import { LoginRequest, LogoutResponse } from "../schema";

export const authMockApi = [
        http.post("/api/auth/login", async ({ request }) => {
                const { username, password } = await request.json() as LoginRequest;
                if (username === "demo" && password === "demo") {
                        return HttpResponse.json({
                                token: "demo",
                                userId: "demo",
                                username: "Demoman"
                        }, {
                                status: 200
                        });
                }

                return HttpResponse.json(
                        {
                                message: "User not found or authorized"
                        },
                        {
                                status: 401
                        }
                );
        }),
        http.post("/api/auth/logout", async ({ request }) => {
                const response: LogoutResponse = {}
                return HttpResponse.json(response, { status: 200 });
        }),
]

registerMocks(() => authMockApi);