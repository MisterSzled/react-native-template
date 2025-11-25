import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";

const index = () => {
        const { t } = useTranslation()
        return (
                <View >
                        <Pressable>{t("login.basket")}</Pressable>
                </View>
        )
}

export default index