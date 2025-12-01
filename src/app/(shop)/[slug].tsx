import ProductCard from '@/src/features/product/components/ProductCard';
import { useBasket } from '@/src/features/product/hooks/useBasket';
import { useProduct } from '@/src/features/product/hooks/useProduct';
import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import "@/unistyles.config";


export default function Screen() {
        const product_slug = useLocalSearchParams().slug;
        const { data, isLoading, isError } = useProduct(product_slug as string);
        const basket = useBasket(s => s);

        if (isLoading) {
                return <View>
                        <Text>X</Text>
                </View>
        }

        return (
                <View style={item_styles.container}>

                        {/* <ProductCard  product={data} amount={basket.items[data.name]} basket={basket}/> */}
                </View>

        );
}

const item_styles = StyleSheet.create(({ colors }) => ({
        container: {
                backgroundColor: colors.base_100,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
        }
}));