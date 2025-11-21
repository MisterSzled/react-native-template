import { httpGet, httpPost } from "./http";

export const apiClient = {
        async get<T>(url: string): Promise<T> {
                return httpGet<T>(url);
        },

        async post<T>(url: string): Promise<T> {
                return httpPost<T>(url);
        }
}