import { useProducts } from "@/src/api/product/product.hooks";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const index = () => {
        const { t } = useTranslation();

        const { data, isLoading, error } = useProducts();

        console.log(data)

        return (
                <View className="w-1/2 bg-red-500 h-1/2">
                        
                </View>
        )
}

export default index