import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import useButtonContext from './context';

interface ButtonIconProps extends PropsWithChildren {
        style?: StyleProp<ViewStyle>
}

const Icon = ({ children, style }: ButtonIconProps) => {
        const { isLoading } = useButtonContext();

        return <View style={[icon_styles.icon, style]}>
                {children}
        </View>
}


const icon_styles = StyleSheet.create(({ colors, tokens }) => ({
        icon: {
                marginLeft: tokens.spacing.md,
        },
}));
export default Icon