import { HttpHandler } from "msw";

type MockProvider = () => HttpHandler[];
const registry: MockProvider[] = [];

export const registerMocks = (provider: MockProvider) => {
        registry.push(provider);
} 

export const getMocks = (): HttpHandler[] => {
        return registry.flatMap((provider) => provider());
}