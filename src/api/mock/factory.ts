import { http, HttpResponse } from "msw";
import { HTTP_METHOD, HttpStatusCode } from "../http/codes";

type JSON =
        | string
        | number
        | boolean
        | null
        | Record<string, any>
        | Array<any>;

type Handler<T = any> = (args: T) => Promise<JSON> | JSON;

export const build_mock = {
        with_status(
                route: string,
                method: HTTP_METHOD,
                handler: Handler,
                status: HttpStatusCode
        ) {
                return http[
                        method.toLowerCase() as keyof typeof http
                ](
                        route, 
                        async (context: any) => 
                {
                        const data = await handler(context);
                        return HttpResponse.json(data, { status });
                })
        },

        with_error(status: number, message: string) {
                return HttpResponse.json({ message }, { status })
        }
}