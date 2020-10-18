import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// {
//     "id": 1,
//     "title": "General Mobile GM 20",
//     "imgURL": "https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg",
//     "price": "₺1.810,21",
//     "inStock": true
// }
const ProductCard = ({ product }) => {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgURL }}
                // style={styles.image}
                style={(product.inStock === false) ? (styles.imageOpacity) : styles.image}
            />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text>{product.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>
                    {product.price}
                    {product.inStock === false ? (<Text style={styles.stockText}> -not in stock</Text>) : null}
                </Text>
            </View>
        </View>
    )
}
export { ProductCard }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
    },
    imageOpacity: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
        opacity: 0.5
    },
    stockText: {
        color: "red",
    }
})