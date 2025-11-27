import { PropsWithChildren } from 'react';
import { StyleProp, TextStyle, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import useButtonContext from './context';
import { variants } from './variants';

interface ButtonTextProps extends PropsWithChildren {
        style?: StyleProp<TextStyle>;
}

const ButtonText = ({ children, style }: ButtonTextProps) => {
        const { variant, isLoading } = useButtonContext();

        return <Text style={[style, base_styles.text, variants[variant].text]} selectable={false}>
                {children}
        </Text>
}

const base_styles = StyleSheet.create(({ colors, tokens }) => ({
        text: {
                fontSize: tokens.fontSize.lg,
                fontWeight: tokens.fontWeight.semibold,
                alignItems: "center",
                justifyContent: "center",
                bottom: 2,
        },
}));

export default ButtonText