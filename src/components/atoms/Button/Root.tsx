import { PropsWithChildren } from 'react';
import { ActivityIndicator, Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ButtonContext } from './context';
import { ButtonVariant, variants } from './variants';

interface RootProps extends PropsWithChildren {
        isLoading?: boolean,
        disabled?: boolean,
        onPress?: () => void,
        onPressIn?: () => void,
        onPressOut?: () => void,
        variant?: ButtonVariant,
        styles?: StyleProp<ViewStyle>
}
const Root = ({
        children,
        isLoading = false,
        disabled = false,
        onPress,
        onPressIn,
        onPressOut,
        variant = "primary",
        styles
}: RootProps) => {
        return <ButtonContext.Provider value={{ isLoading, disabled, variant }}>
                <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
                        <View style={[
                                base_styles.container,
                                variants[variant].container,
                                disabled && base_styles.disabled,
                                styles,
                        ]}>
                                {isLoading &&
                                        <View style={[
                                                base_styles.spinner,
                                                variants[variant].spinner
                                        ]}>
                                                <ActivityIndicator color={"black"} />
                                        </View>
                                }
                                <View style={[
                                        base_styles.children,
                                        variants[variant].children,
                                        { opacity: isLoading ? 0 : 1 }
                                ]}>
                                        {children}
                                </View>
                        </View>
                </Pressable>
        </ButtonContext.Provider>
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
        }
}));

export default Root;