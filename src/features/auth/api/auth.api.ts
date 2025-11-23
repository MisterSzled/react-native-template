import { apiClient } from "@/src/api/client";
import { LoginResponse, LoginResponseSchema, LogoutRequest, LogoutResponse, LogoutResponseSchema } from "../schema";
import { API_ROUTES } from "./auth.routes";

export const authApi = {
        async login(username: string, password: string): Promise<LoginResponse> {
                const data = await apiClient.post(API_ROUTES.LOGIN, {
                        username,
                        password
                });
                return LoginResponseSchema.parse(data);
        },
        async logout(_: LogoutRequest = {}): Promise<LogoutResponse> {
                const data = await apiClient.post(API_ROUTES.LOGOUT, {});
                return LogoutResponseSchema.parse(data);
        },
}