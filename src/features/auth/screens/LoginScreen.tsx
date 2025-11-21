import { useProducts } from "@/src/api/product/product.hooks";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const index = () => {
        const { t } = useTranslation();

        const { data, isLoading, error } = useProducts();

        console.log(data)

        return (
                <View >
                        
                </View>
        )
}

export default index