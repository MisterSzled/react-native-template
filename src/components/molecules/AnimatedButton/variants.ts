import { StyleSheet } from 'react-native-unistyles';

export const neobrutalism = StyleSheet.create(({ colors, tokens }) => ({
        root: {
                backgroundColor: colors.neutral,
                borderRadius: tokens.radius.md,
                borderWidth: tokens.borderWidth.regular,
                borderColor: "black",
        },
        container: {
                borderRadius: tokens.radius.md,
                paddingVertical: tokens.spacing.md,
                paddingHorizontal: tokens.spacing.xl,
        },
        children: {
        },
        spinner: {

        },
        text: {
                color: colors.neutral_content,
                fontWeight: tokens.fontWeight.black
        },
        activity: {
                color: "block"
        }
}));

export const variants = {
        neobrutalism: neobrutalism,
}

export type AnimatedButtonVariantStyles = typeof neobrutalism;
export type AnimatedButtonVariant = keyof typeof variants;
