type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
        method?: HttpMethod,
        body?: unknown,
        headers?: Record<string, string>
}

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
        const { method = "GET", body, headers = {} } = options;

        const res = await fetch(url, {
                method,
                headers: {
                        "Content-Type": "application/json",
                        ...headers
                },
                body: body ? JSON.stringify(body) : undefined
        });

        if (!res.ok) {
                let text;
                try {
                        const error_response_text = await res.json();
                        text = error_response_text;
                } catch (error) {
                        text = res.statusText || "Unknown error";
                }

                throw new Error(`${method} ${url} failed: ${res.status}`);
        }

        return res.json() as Promise<T>;
}

export async function httpGet<T>(url: string): Promise<T> {
        return request<T>(url, { method: "GET" });
}

export async function httpPost<T>(url: string, body?: unknown): Promise<T> {
        return request<T>(url, { method: "POST", body });
}

export async function httpPut<T>(url: string, body?: unknown): Promise<T> {
        return request<T>(url, { method: "PUT", body });
}

export async function httpPatch<T>(url: string, body?: unknown): Promise<T> {
        return request<T>(url, { method: "PUT", body });
}

export async function httpDelete<T>(url: string, body?: unknown): Promise<T> {
        return request<T>(url, { method: "DELETE", body });
}