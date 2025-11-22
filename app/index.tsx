import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Button } from "tamagui";

const index = () => {
        const { t } = useTranslation();

        const handleLogin = () => {
                router.replace("/(shop)/shop")
        }

        return (
                <Button onPress={handleLogin}>
                        {t("login.title")}
                </Button>
        )
}

export default index