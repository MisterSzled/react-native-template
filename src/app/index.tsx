import { useAuth } from "@src/features/auth/hooks/useAuth";
import { useLogin } from "@src/features/auth/hooks/useLogin";
import { Redirect } from "expo-router";
import { useTranslation } from "react-i18next";
import { Button } from "tamagui";

const index = () => {
        const { t } = useTranslation();

        const { isAuthenticated } = useAuth((s) => s);
        if (isAuthenticated) {
                return <Redirect href="/(shop)/shop" />
        }

        const { mutate: login, isPending } = useLogin();
        const handleLogin = () => {
                login({
                        username: "demo",
                        password: "demo"
                })
        }

        return (
                <Button onPress={handleLogin}>
                        {t("login.title")}
                </Button>
        )
}

export default index