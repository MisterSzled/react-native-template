import { useTranslation } from "react-i18next";
import { Button } from "tamagui";
import { useLogin } from "../features/auth/hooks/useLogin";
import { useProducts } from "../features/product/hooks/useProducts";

const index = () => {
        const { t } = useTranslation();
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