import { useLogout } from "@/src/features/auth/hooks/useLogout";
import { useProducts } from "@/src/features/product/hooks/useProducts";
import { useTranslation } from "react-i18next";
import { Button, View } from "tamagui";

const index = () => {
        const { t } = useTranslation();

        const { data, isLoading, error } = useProducts();

        const { mutate: logout, isPending } = useLogout();
        const handleLogout = () => {
                logout()
        }

        return (
                <View width={"$10"}>
                        <Button onPress={handleLogout}>{t("login.shop")}</Button>
                </View>
        )
}

export default index