import { useTranslation } from "react-i18next";
import { Button, View } from "tamagui";

const index = () => {
        const { t } = useTranslation()
        return (
                <View width={"$10"}>
                        <Button>{t("login.basket")}</Button>
                </View>
        )
}

export default index