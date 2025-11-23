import { apiClient } from "@/src/api/client";
import { AuthResponse } from "../schema";

export const authApi = {
        async login(username: string, password: string): Promise<AuthResponse> {
                const data = await apiClient.post(`/api/auth/login`, {
                        username,
                        password
                });
                return AuthResponse.parse(data);
        },
        async logout(): Promise<AuthResponse> {
                const data = await apiClient.post(`/api/auth/login`);
                return AuthResponse.parse(data);
        },
}