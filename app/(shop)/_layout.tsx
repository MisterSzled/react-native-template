import { Tabs } from "expo-router"

const _layout = () => {
        return (
                <Tabs>
                        <Tabs.Screen
                                name="shop"
                                options={{
                                        title: "Shop"
                                }}
                        />
                        <Tabs.Screen
                                name="basket"
                                options={{
                                        title: "Basket"
                                }}
                        />
                </Tabs>
        )
}

export default _layout