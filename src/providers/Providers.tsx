
import I18next from "@/src/providers/I18next";
import Msw from "@/src/providers/Msw";
import Query from "@/src/providers/Query";
import { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const Providers = ({ children }: { children: ReactNode }) => {
        return <Msw>
                <Query>
                        <I18next >
                                <SafeAreaProvider>
                                        <SafeAreaView style={{ flex: 1 }}>
                                                {children}
                                        </SafeAreaView>
                                </SafeAreaProvider>
                        </I18next>
                </Query>
        </Msw>
}

export default Providers;