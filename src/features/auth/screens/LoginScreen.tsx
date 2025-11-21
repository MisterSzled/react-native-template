import { useProducts } from "@/src/api/product/product.hooks";
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import ThemeToggle from "@/src/components/ui/theme_toggle";
import { useTranslation } from "react-i18next";

const index = () => {
        const { t } = useTranslation();

        const { data, isLoading, error } = useProducts();

        console.log(data)

        return (
                <Box
                        className="flex items-center justify-center h-full"
                >
                        <ThemeToggle />
                        <Text className="text-red-500">{t("welcome")}</Text>
                </Box>
        )
}

export default index