import { PropsWithChildren } from 'react';
import { ActivityIndicator, Pressable, PressableProps, StyleProp, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ButtonContext, ButtonVariant } from './context';

interface RootProps extends PropsWithChildren {
        isLoading?: boolean,
        disabled?: boolean,
        onPress?: () => void,
        variant?: ButtonVariant,
        styles?: StyleProp<PressableProps>
}
const Root = ({
        children,
        isLoading = false,
        disabled = false,
        onPress,
        variant = "primary",
        styles
}: RootProps) => {
        return <ButtonContext.Provider value={{ isLoading, disabled, variant }}>
                <Pressable
                        onPress={onPress}
                        style={({ pressed, hovered }) => [
                                root_styles.root,
                                disabled && root_styles.disabled,
                                hovered && !disabled && root_styles.hovered,
                                pressed && !disabled && root_styles.pressed,
                                styles
                        ]}
                >
                        <View style={root_styles.container}>
                                {isLoading &&
                                        <View style={root_styles.spinner_container}>
                                                <ActivityIndicator />
                                        </View>
                                }
                                <View style={[root_styles.root, { opacity: isLoading ? 0.05 : 1 }]}>
                                        {children}
                                </View>
                        </View>

                </Pressable>
        </ButtonContext.Provider>
}

const root_styles = StyleSheet.create(({ colors, tokens }) => ({
        root: {
                flexDirection: "row",
                borderRadius: tokens.radius.md,
        },
        container: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.neutral,
                paddingVertical: tokens.spacing.md,
                paddingHorizontal: tokens.spacing.lg,
                borderRadius: tokens.radius.md,
                overflow: "hidden"
        },
        disabled: {
                opacity: tokens.opacity.disabled
        },
        pressed: {
                backgroundColor: colors.base_200
        },
        hovered: {
                backgroundColor: colors.base_300
        },
        spinner_container: {
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                justifyContent: "center",
                alignItems: "center"
        }
}));

export default Root;