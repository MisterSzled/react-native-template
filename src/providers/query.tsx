import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface Props {
        children: any
}

const queryClient = new QueryClient();
export const QueryProvider = ({ children }: Props) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)