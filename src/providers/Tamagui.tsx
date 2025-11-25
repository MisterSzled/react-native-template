



import { ReactNode } from 'react';
import { createTamagui, TamaguiProvider } from "tamagui";
import { config } from "../../_config/tamagui/tamagui.config.ts";

const tamagui_config = createTamagui(config);
type Conf = typeof tamagui_config

declare module '@tamagui/core' {
        interface TamaguiCustomConfig extends Conf { }
}

export default function Tamagui({ children }: { children: ReactNode }) {

        return <TamaguiProvider config={tamagui_config} >
                {children}
        </TamaguiProvider>
}