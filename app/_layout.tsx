import { Stack } from "expo-router";

import I18next from "@/src/providers/I18next";
import Msw from "@/src/providers/Msw";
import Query from "@/src/providers/Query";
import Tamagui from "@/src/providers/Tamagui";

export default function RootLayout() {
        return <Msw>
                <Query>
                        <Tamagui >
                                <I18next >
                                        <Stack screenOptions={{
                                                headerShown: false
                                        }} />
                                </I18next>
                        </Tamagui>
                </Query>
        </Msw>
}