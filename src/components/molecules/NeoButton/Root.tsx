import { PropsWithChildren } from 'react';
import { ActivityIndicator, Pressable, PressableProps, StyleProp, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { ButtonVariant, variants } from './variants';

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
        variant = "neobrutalism",
        styles
}: RootProps) => {
        const animating = useSharedValue(false);
        const translateY = useSharedValue(0);

        const PressIn = () => {
                if (animating.value) return;
                animating.value = true;

                translateY.value = withTiming(5, { duration: 100 }, () => {
                        translateY.value = withTiming(0, { duration: 100 })
                })
        }

        return <Pressable onPress={onPress} onPressIn={PressIn} >
                <Animated.View style={[
                        base_styles.container,
                        variants[variant].root,
                        variants[variant].container,
                        disabled && base_styles.disabled,
                        styles,
                        {
                                transform: [{ translateY }]
                        }
                ]}>
                        {isLoading &&
                                <View style={[
                                        base_styles.spinner,
                                        variants[variant].spinner
                                ]}>
                                        <ActivityIndicator />
                                </View>
                        }
                        <View style={[
                                base_styles.children,
                                variants[variant].children,
                                { opacity: isLoading ? 0 : 1 }
                        ]}>
                                {children}
                        </View>
                </Animated.View>

                <View style={base_styles.backdrop} />
        </Pressable>
}

const base_styles = StyleSheet.create(({ tokens }) => ({
        container: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
        },
        children: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
        },
        disabled: {
                opacity: tokens.opacity.disabled
        },
        spinner: {
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                justifyContent: "center",
                alignItems: "center"
        },
        backdrop: {
                flex: 1,
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: -1,
                backgroundColor: "black",
                bottom: -5,
                borderRadius: tokens.radius.md
        }
}));

export default Root;