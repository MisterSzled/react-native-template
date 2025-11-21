export async function enableMocking() {
        if (!__DEV__) return;

        await import("./msw.polyfills");

        const { mockServer } = await import("@/src/api/mocks.ts");

        mockServer.listen({
                onUnhandledRequest: "bypass"
        })
}

export function startMocks() {
        if (!__DEV__) return Promise.resolve();
        return enableMocking();
}