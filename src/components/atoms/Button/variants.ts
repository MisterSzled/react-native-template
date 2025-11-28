import { StyleSheet } from 'react-native-unistyles';

export const primary = StyleSheet.create(({ colors, tokens }) => ({
        root: {
                backgroundColor: colors.neutral,
                borderRadius: tokens.radius.md,
        },
        container: {
                paddingVertical: tokens.spacing.md,
                paddingHorizontal: tokens.spacing.lg,
        },
        children: {

        },
        spinner: {

        },
        pressed: {
                backgroundColor: colors.neutral
        },
        hovered: {
                backgroundColor: colors.neutral
        },
        text: {
                color: colors.neutral_content
        }
}));

export const secondary = StyleSheet.create(({ colors, tokens }) => ({
        root: {
                backgroundColor: colors.base_300,
                borderRadius: tokens.radius.md,
        },
        container: {
                paddingVertical: tokens.spacing.sm,
                paddingHorizontal: tokens.spacing.md,
        },
        children: {

        },
        spinner: {

        },
        pressed: {
                backgroundColor: colors.base_200
        },
        hovered: {
                backgroundColor: colors.base_300
        },
        text: {
                color: colors.neutral_content
        }
}));

export const ghost = StyleSheet.create(({ colors, tokens }) => ({
        root: {
                backgroundColor: "transparent",
        },
        container: {
                paddingVertical: tokens.spacing.sm,
                paddingHorizontal: tokens.spacing.md,
        },
        children: {

        },
        spinner: {

        },
        pressed: {
                backgroundColor: colors.base_200
        },
        hovered: {
                backgroundColor: colors.base_300
        },
        text: {
                color: colors.neutral_content
        }
}));

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
        }
}));

export const variants = {
        primary: primary,
        secondary: secondary,
        ghost: ghost,
        neobrutalism: neobrutalism,
}

export type ButtonVariantStyles = typeof primary;
export type ButtonVariant = keyof typeof variants;
