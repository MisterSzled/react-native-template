import { PropsWithChildren } from 'react';
import { StyleProp, TextStyle, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import useButtonContext from './context';

interface ButtonTextProps extends PropsWithChildren {
        style?: StyleProp<TextStyle>;
}

const ButtonText = ({ children, style }: ButtonTextProps) => {
        const { variant, isLoading } = useButtonContext();

        return <Text style={[style, text_styles.text]} selectable={false}>
                {children}
        </Text>
}

const text_styles = StyleSheet.create(({ colors, tokens }) => ({
        text: {
                color: colors.neutral_content,
                fontSize: tokens.fontSize.lg,
                fontWeight: tokens.fontWeight.semibold,
                alignItems: "center",
                justifyContent: "center",
                bottom: 2,
        },
}));

export default ButtonText