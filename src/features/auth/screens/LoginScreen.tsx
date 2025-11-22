import { useProducts } from "@/src/api/product/product.hooks";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Button } from "tamagui";

const index = () => {
        const { t } = useTranslation();

        const { data, isLoading, error } = useProducts();

        console.log(data)

        return (
                <View >
                        <Button theme={"red"} width={"$10"} height={"$10"}/>
                </View>
        )
}

export default index