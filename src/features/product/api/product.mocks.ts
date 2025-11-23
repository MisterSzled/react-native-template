import { HTTP_STATUS } from "@/src/api/http/codes";
import { build_mock } from "@/src/api/mock/factory";
import { registerMocks } from "@src/api/mock/registry";
import { API_ROUTES } from "./product.routes";

export const productMockApi = [
        build_mock.with_status(
                API_ROUTES.PRODUCTS,
                "GET",
                async () => ([{ name: "Test name", id: "1010101" }]),
                HTTP_STATUS.OK
        ),

        build_mock.with_status(
                API_ROUTES.PRODUCT_PATTERN,
                "GET",
                async ({ params }) => {
                        const id = Number(params.id);
                        return ({ name: "Test name", id: id })
                },
                HTTP_STATUS.OK
        )
]

registerMocks(() => productMockApi);