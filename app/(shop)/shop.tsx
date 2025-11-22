import { useProducts } from "@/src/features/product/api/product.hooks";
import { useTranslation } from "react-i18next";
import { Button, View } from "tamagui";

const index = () => {
        const { t } = useTranslation();

        const { data, isLoading, error } = useProducts();
        console.log(data)

        return (
                <View width={"$10"}>
                        <Button>{t("login.shop")}</Button>
                </View>
        )
}

export default index