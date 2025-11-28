import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface ButtonIconProps extends PropsWithChildren {
        style?: StyleProp<ViewStyle>
}

const Icon = ({ children, style }: ButtonIconProps) => {
        return <View style={[icon_styles.icon, style]}>
                {children}
        </View>
}


const icon_styles = StyleSheet.create(({ tokens }) => ({
        icon: {
                marginLeft: tokens.spacing.md,
        },
}));
export default Icon