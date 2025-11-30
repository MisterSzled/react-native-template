import React from 'react';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import RenderHTML from "react-native-render-html";
import { StyleSheet } from 'react-native-unistyles';
import type { Product } from '../schema';

interface Props {
    product: Product,
    describe?: boolean,
}

const ProductCard = ({ product, describe }: Props) => {
    const { width } = useWindowDimensions();
    const handleProductPress = () => {
        // router.navigate(`/product/${product.slug}`);
    }

    return (
        <View style={product_card_styles.root}>
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

                {/* <ProductQuantityControl product={product} /> */}
            </View>
        </View>
    )
}


const product_card_styles = StyleSheet.create(({ tokens }) => ({
    root: {
        padding: tokens.spacing.xs
    },
}));

export default ProductCard