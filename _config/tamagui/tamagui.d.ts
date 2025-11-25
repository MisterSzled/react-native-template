import type { TamaguiConfig } from "tamagui";
import 'tamagui';

declare module 'tamagui' {
        interface TamaguiCustomConfig extends TamaguiConfig { }
}