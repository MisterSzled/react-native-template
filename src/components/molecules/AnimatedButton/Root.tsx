import Button from '@src/components/atoms/Button';
import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { bounce } from "./animations/bounce";
import { AnimatedButtonVariant, variants } from './variants';

interface RootProps extends PropsWithChildren {
        isLoading?: boolean,
        disabled?: boolean,
        onPress?: () => void,
        icon?: React.ReactNode,
        variant?: AnimatedButtonVariant,
        styles?: StyleProp<ViewStyle>
}
const Root = ({
        children,
        isLoading = false,
        disabled = false,
        onPress,
        icon,
        variant = "neobrutalism",
        styles
}: RootProps) => {
        const { animatedStyle, pressIn, pressOut } = bounce();

        return <View>
                <Animated.View style={animatedStyle}>
                        <Button.Root
                                isLoading={isLoading}
                                disabled={disabled}
                                onPress={onPress}
                                onPressIn={pressIn}
                                onPressOut={pressOut}
                                styles={[
                                        variants[variant].root,
                                        styles
                                ]}
                        >
                                {children && (
                                        <Button.Text style={variants[variant].text}>
                                                {children}
                                        </Button.Text>
                                )}
                                {icon && (
                                        <Button.Icon >
                                                {icon}
                                        </Button.Icon>
                                )}
                        </Button.Root>
                </Animated.View>
                <View style={base_styles.backdrop} />
        </View>

}

const base_styles = StyleSheet.create(({ tokens }) => ({
        root: {

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