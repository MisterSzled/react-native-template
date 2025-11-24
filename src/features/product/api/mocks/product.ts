import { HandlerContext } from "@/src/api/mock/factory";

export const product = {
        delay: 0,
        handler: async (_: HandlerContext) => ({ name: "Test name", id: "1010101" })
};