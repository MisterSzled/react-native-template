import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useTranslation } from "react-i18next";

const index = () => {
        const { t } = useTranslation();
        return (
                <Box
                        className="flex justify-center items-center h-full"
                >
                        <Text className="text-red-500">{t("welcome")}</Text>
                </Box>
        )
}

export default index