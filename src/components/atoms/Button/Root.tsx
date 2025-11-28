import { PropsWithChildren } from 'react';
import { ActivityIndicator, Pressable, PressableProps, StyleProp, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { ButtonContext } from './context';
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
        variant = "primary",
        styles
}: RootProps) => {

        return <ButtonContext.Provider value={{ isLoading, disabled, variant }}>
                <Pressable>
                        <Animated.View style={[
                                base_styles.container,
                                variants[variant].root,
                                variants[variant].container,
                                disabled && base_styles.disabled,
                                styles,
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
                                        { opacity: isLoading ? 0.05 : 1 }
                                ]}>
                                        {children}
                                </View>
                        </Animated.View>

                </Pressable>
        </ButtonContext.Provider>
}

const base_styles = StyleSheet.create(({ colors, tokens }) => ({
        container: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
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
        }
}));

export default Root;