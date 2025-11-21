import '@/global.css';
import { Stack } from "expo-router";

import { I18nextProvider } from 'react-i18next';
import i18n from '@/src/i18n/index';

import { useEffect, useState } from 'react';

import { startMocks } from '@/_config/msw/setup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout() {
        const queryClient = new QueryClient();
        const [ready, setReady] = useState(!__DEV__);

        useEffect(() => {
                startMocks().then(() => setReady(true))
        }, []);
        
        if (!ready) return null;

        return <QueryClientProvider client={queryClient}>
                <I18nextProvider i18n={i18n}>
                        <Stack screenOptions={{
                                headerShown: false
                        }}/>
                </I18nextProvider>
        </QueryClientProvider>
}