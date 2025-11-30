import "@/unistyles.config";
import { Tabs } from "expo-router";

const _layout = () => {
        return (
                <Tabs>
                        <Tabs.Screen
                                name="shop"
                                options={{
                                        title: "Shop",
                                        headerShown: false,
                                }}
                        />
                        <Tabs.Screen
                                name="basket"
                                options={{
                                        title: "Basket",
                                        headerShown: false
                                }}
                        />
                        <Tabs.Screen
                                name="[slug]"
                                options={{
                                        title: "[slug]",
                                        href: null,
                                        headerShown: false
                                }}
                        />
                </Tabs>
        )
}

export default _layout