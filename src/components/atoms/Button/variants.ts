import { StyleSheet } from 'react-native-unistyles';
import chroma from "chroma-js";

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
                
                shadowColor: "black",
                shadowOffset: {
                        width: 0,
                        height: tokens.spacing.xs,
                },
                shadowOpacity: 1,
                shadowRadius: tokens.radius.none
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
        pressed: {
                shadowOffset: {
                        width: 0,
                        height: 0,
                },

                transform: [
                        { translateX: 0 }, 
                        { translateY: 4 }
                ]
        },
        hovered: {
                transform: [
                        { translateX: 0 }, 
                        { translateY: -2 }
                ],
                shadowOffset: {
                        width: 0,
                        height: 6,
                },
        },
        text: {
                color: colors.neutral_content,
                fontWeight: tokens.fontWeight.black
        }
}));

export const variants
        = {
        primary: primary,
        secondary: secondary,
        ghost: ghost,
        neobrutalism: neobrutalism,
}

export type ButtonVariantStyles = typeof primary;
export type ButtonVariant = keyof typeof variants;
