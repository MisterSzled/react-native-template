import { productApi } from "@/src/api/products/product.api";
import { Product } from "@/src/api/products/product.schema";
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const index = () => {
        const { t } = useTranslation();

        const [products, setProducts] = useState<Product[]>([]);
        useEffect(() => { 
                productApi.products().then(setProducts).catch(console.error); 
        }, []);

        console.log(products)
        
        return (
                <Box
                        className="flex items-center justify-center h-full"
                >
                        <Text className="text-red-500">{t("welcome")}</Text>
                </Box>
        )
}

export default index