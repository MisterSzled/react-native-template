// import IconButton from "@src/components/atoms/IconButton";
import { useAuth } from "@src/features/auth/hooks/useAuth";
import { useLogin } from "@src/features/auth/hooks/useLogin";
import { Redirect } from "expo-router";
import { useTranslation } from "react-i18next";
import { Button, YStack } from "tamagui";
import XButton from "@src/components/atoms/Button";

const index = () => {
        const { t } = useTranslation();
        const { isAuthenticated } = useAuth((s) => s);
        const { mutate: login, isPending } = useLogin();

        const handleLogin = () => {
                login({
                        username: "demo",
                        password: "demo"
                })
        }

        if (isAuthenticated) {
                return <Redirect href="/(shop)/shop" />
        }

        return (
                <YStack
                        flex={1}
                        justify={"center"}
                        items={"center"}
                >
                        {/* <IconButton
                                loading={isPending}
                                size={"$6"}
                                onPress={handleLogin}
                                fontWeight={"600"}
                                bordered
                                borderWidth={"$1"}
                        >
                                {t("login.title")}
                        </IconButton> */}
                        {/* <Button backgroundColor={"$color10"}> */}
                        <Button size={"$7"} >
                                {t("login.title")}
                        </Button>
                        {/* <XButton >
                                {t("login.title")}
                        </XButton> */}
                </YStack>

        )
}

export default index