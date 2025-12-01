import Button from '@/src/components/atoms/Button';
import { Minus, Plus } from 'iconoir-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { BasketStore } from '../stores/basket.store';

interface Props {
    product_name: string,
    amount?: number,
    basket: BasketStore
}

const QuantityControl = ({ product_name, amount, basket }: Props) => {
    return (
        <View style={styles.root}>
            <Button.Root onPress={() => basket.decrement(product_name)}>
                <Button.Icon>
                    <Minus />
                </Button.Icon>
            </Button.Root>
            <Text>
                {amount ?? 0}
            </Text>
            <Button.Root onPress={() => basket.increment(product_name)}>
                <Button.Icon>
                    <Plus />
                </Button.Icon>
            </Button.Root>
        </View>
    )
}

const styles = StyleSheet.create(({tokens}) => ({
    root: {
        marginTop: tokens.spacing.md,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

export default QuantityControl