import '@/global.css';
import { Stack } from "expo-router";

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/src/i18n/index';

import { QueryProvider } from "@/src/providers/query";
import { useEffect, useState } from 'react';

import { startMocks } from '@/msw/setup';

export default function RootLayout() {
        const [ready, setReady] = useState(!__DEV__);

        useEffect(() => {
                startMocks().then(() => setReady(true))
        }, []);
        if (!ready) return null;

        return <QueryProvider>
                <I18nextProvider i18n={i18n}>
                        <Stack />
                </I18nextProvider>
        </QueryProvider>
}