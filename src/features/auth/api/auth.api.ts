import { apiClient } from "@/src/api/client";
import { LoginResponse, LoginResponseSchema, LogoutRequest, LogoutResponse, LogoutResponseSchema } from "../schema";

export const authApi = {
        async login(username: string, password: string): Promise<LoginResponse> {
                const data = await apiClient.post(`/api/auth/login`, {
                        username,
                        password
                });
                return LoginResponseSchema.parse(data);
        },
        async logout(_: LogoutRequest = {}): Promise<LogoutResponse> {
                const data = await apiClient.post(`/api/auth/logout`, {});
                return LogoutResponseSchema.parse(data);
        },
}