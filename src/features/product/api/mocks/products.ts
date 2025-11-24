import { HandlerContext } from "@/src/api/mock/factory";

export const products = async (_: HandlerContext) => ([{ name: "Test name", id: "1010101" }])