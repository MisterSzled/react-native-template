import { HTTP_METHOD } from "./http/codes";

export type ContractEntry = {
        method: HTTP_METHOD;
        pattern: string;
        route?: (...args: any[]) => string;
        response?: any
}

export type Contract = Record<string, ContractEntry>;