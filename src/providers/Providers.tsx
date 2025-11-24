
import I18next from "@/src/providers/I18next";
import Msw from "@/src/providers/Msw";
import Query from "@/src/providers/Query";
import Tamagui from "@/src/providers/Tamagui";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
        return <Msw>
                <Query>
                        <Tamagui >
                                <I18next >
                                        {children}
                                </I18next>
                        </Tamagui>
                </Query>
        </Msw>
}

export default Providers;