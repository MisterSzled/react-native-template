export async function enableMocking() {
        if (!__DEV__) return;

        await import("./msw.polyfills");

        const { server } = await import("@/src/mocks/server");

        server.listen({
                onUnhandledRequest: "bypass"
        })
}

export function startMocks() {
        if (!__DEV__) return Promise.resolve();
        return enableMocking();
}