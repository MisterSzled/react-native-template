import React from 'react';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import RenderHTML from "react-native-render-html";
import { StyleSheet } from 'react-native-unistyles';
import type { Product } from '../schema';
import { BasketStore } from '../stores/basket.store';
import QuantityControl from './QuantityControl';
import { router } from 'expo-router';

interface Props {
    product: Product,
    amount?: number,
    basket: BasketStore
}

const ProductCard = ({ product, amount, basket }: Props) => {
    const { width } = useWindowDimensions();
    const handleProductPress = () => {
        router.navigate({
            pathname: `/(shop)/[slug]`,
            params: {slug: product.slug}
        });
    }
    return (
        <View style={styles.root}>
            <TouchableOpacity onPress={handleProductPress}>
                <Image
                    className="w-full"
                    alt={product?.thumbnail?.alt}
                    resizeMode='cover'
                    style={{
                        aspectRatio: 1.2
                    }}
                    source={{
                        uri: product?.thumbnail?.url,
                    }}
                />
            </TouchableOpacity>

            <View >
                <View >
                    {product?.category?.map(category =>
                        <Text key={product.id + category}>
                            {category}
                        </Text>
                    )}
                </View>

                <TouchableOpacity onPress={handleProductPress}>
                    <Text>
                        {product.name}
                    </Text>
                </TouchableOpacity>

                <Text >
                    £{product.minPrice}
                </Text>

                <View>
                    <RenderHTML
                        contentWidth={width}
                        source={{ html: product?.description }}
                    />
                </View>

                <QuantityControl product_name={product.name} basket={basket} amount={amount}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create(({ tokens }) => ({
    root: {
        flex: 1,
        padding: tokens.spacing.xs
    },
    increment_bar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

export default ProductCard