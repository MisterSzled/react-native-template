import { Stack } from "expo-router";

import I18next from "@/src/providers/I18next";
import Msw from "@/src/providers/Msw";
import Query from "@/src/providers/Query";
import Tamagui from "@/src/providers/Tamagui";
import { useAuth } from "../features/auth/hooks/useAuth";

export default function RootLayout() {
        const isAuthenticated = useAuth((s) => s.isAuthenticated)

        return <Msw>
                <Query>
                        <Tamagui >
                                <I18next >
                                        <Stack screenOptions={{ headerShown: false}} >
                                                
                                                {/* Public */}
                                                <Stack.Screen name="index"/>

                                                {/* Private */}
                                                <Stack.Screen name="(shop)" redirect={!isAuthenticated}/>
                                        </Stack>
                                </I18next>
                        </Tamagui>
                </Query>
        </Msw>
}