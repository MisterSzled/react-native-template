import { registerMocks } from "@src/api/mock/registry";
import { http, HttpResponse } from "msw";

export const productMockApi = [
        http.get("./api/products", () => {
                return HttpResponse.json([
                        { name: "Test name", id: "1010101" }
                ])
        }),

        http.get("./api/product/:id", ({ params }) => {
                const id = Number(params.id);
                return HttpResponse.json([
                        { name: "Test name", id: id }
                ])
        })
]

registerMocks(() => productMockApi);