import "../global.css";
import { Stack } from "expo-router";

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { QueryProvider } from "@/src/providers/query";
import '@/global.css';

export default function RootLayout() {
        return <QueryProvider>
                <Stack />
        </QueryProvider>
}
