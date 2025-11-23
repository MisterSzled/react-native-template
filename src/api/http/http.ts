import { HTTP_METHOD } from "./codes";
import { applyInterceptors, HttpRequestConfig } from "./interceptor/interceptor";

async function request<T>(method: HTTP_METHOD, url: string, body?: any): Promise<T> {
        let config: HttpRequestConfig = { method, url };

        if (body) {
                config.body = JSON.stringify(body);
        };

        config = applyInterceptors(config);

        const response = await fetch(config.url, {
                method: config.method,
                headers: config.headers,
                body: config.body
        });

        if (!response.ok) {
                let text;
                try {
                        const error_response_text = await response.json();
                        text = error_response_text;
                } catch (error) {
                        text = response.statusText || "Unknown error";
                }

                throw new Error(`${method} ${url} failed: ${response.status} - error: ${text}`);
        }

        return response.json() as Promise<T>;
}

export const httpGet = <T>(url: string) => request<T>("GET", url);
export const httpPost = <T>(url: string, body?: any) => request<T>("POST", url, body);
export const httpPut = <T>(url: string, body?: any) => request<T>("PUT", url, body);
export const httpPatch = <T>(url: string, body?: any) => request<T>("PATCH", url, body);
export const httpDelete = <T>(url: string) => request<T>("DELETE", url);