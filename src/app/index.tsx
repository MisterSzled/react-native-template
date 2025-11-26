import { useAuth } from "@src/features/auth/hooks/useAuth";
import { useLogin } from "@src/features/auth/hooks/useLogin";
import { Redirect } from "expo-router";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import Button from "@src/components/atoms/Button";
import { ArrowRight } from 'iconoir-react-native';

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
                <View
                        style={styles.container}
                >

                        <Button.Root isLoading={isPending} onPress={handleLogin}>
                                <Button.Text>
                                {t("login.title")}
                                </Button.Text>
                                <Button.Icon>
                                        <ArrowRight  />
                                </Button.Icon>
                        </Button.Root>
                </View>

        )
}

const styles = StyleSheet.create(({ colors, tokens }) => ({
        stack: {
                flex: 1,
                backgroundColor: "red"
        },
        container: {
                backgroundColor: colors.base_100,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
        },
        pressable: {
                backgroundColor: colors.neutral,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: tokens.spacing["2xl"],
                paddingVertical: tokens.spacing["xl"],
                borderRadius: tokens.radius.md,
                fontSize: tokens.fontSize.lg
        }
}));

export default index