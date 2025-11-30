import { useScaledColumns } from '@/src/features/__core/hooks/useScaledColumns';
import { useLogout } from "@/src/features/auth/hooks/useLogout";
import ProductCard from "@/src/features/product/components/ProductCard";
import { useProducts } from "@/src/features/product/hooks/useProducts";
import { useBasket } from '@src/features/product/hooks/useBasket';
import { useTranslation } from "react-i18next";
import { FlatList, Pressable, Text, View } from "react-native";
import { StyleSheet } from 'react-native-unistyles';

const index = () => {
        const { t } = useTranslation();
        const basket = useBasket((s) => s);

        const numCols = useScaledColumns();
        const wrapper_styles = (cols: number) => {
                if (cols <= 1) return undefined
                return shop_styles.column_wrapper
        }

        const { data, isLoading, error } = useProducts();
        const { mutate: logout, isPending } = useLogout();
        const handleLogout = () => {
                logout()
        }

        if (isLoading) {
                return <View>
                        <Text>No Dice</Text>
                </View>
        }

        return (
                <View style={shop_styles.container}>
                        <Pressable onPress={handleLogout}>
                                <Text>{t("login.shop")}</Text>
                        </Pressable>

                        <FlatList
                                data={data}
                                key={numCols}
                                numColumns={numCols}
                                contentContainerStyle={shop_styles.list_container}
                                columnWrapperStyle={wrapper_styles(numCols)}
                                renderItem={({ item }) => (
                                        <ProductCard product={item} basket={basket} amount={basket.items[item.name]} />
                                )}
                        />
                </View>
        )
}

const shop_styles = StyleSheet.create(({ colors, tokens }) => ({
        column_wrapper: {
                gap: tokens.spacing.sm,
                justifyContent: "center"
        },
        list_container: {
                margin: tokens.spacing.lg,
                gap: tokens.spacing.lg
        },
        container: {
                backgroundColor: colors.base_100,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
        }
}));

export default index