import { useLogout } from "@/src/features/auth/hooks/useLogout";
import { useProducts } from "@/src/features/product/hooks/useProducts";
import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";

const index = () => {
        const { t } = useTranslation();

        const { data, isLoading, error } = useProducts();

        const { mutate: logout, isPending } = useLogout();
        const handleLogout = () => {
                logout()
        }

        return (
                <View >
                        <Pressable onPress={handleLogout}>{t("login.shop")}</Pressable>
                </View>
        )
}

export default index