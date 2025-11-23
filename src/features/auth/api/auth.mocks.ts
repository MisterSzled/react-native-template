import { registerMocks } from "@src/api/mock/registry";
import { http, HttpResponse } from "msw";

interface LoginBody {
        username: string,
        password: string
}

export const authMockApi = [
        http.post("/api/auth/login", async ({ request }) => {
                const { username, password } = await request.json() as LoginBody;
                if (username === "demo" && password === "demo") {
                        return HttpResponse.json({
                                token: "demo",
                                userId: "demo",
                                username: "Demoman"
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
        })
]

registerMocks(() => authMockApi);