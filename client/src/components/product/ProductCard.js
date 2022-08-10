import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text, Button } from "react-native";
const { width } = Dimensions.get('window')

// console.log(height)
const ProductCard = ({ name, price, image, inStock }) => {
    const [card, setCard] = useState(false)
    const openCard = () => {
        setCard(true)
    }
    // console.log(image)
    return <>
        <View style={Styles.container} onPress={openCard}>
            <Image style={Styles.image}
                resizeMode={"cover"}
                source={{ uri: image ? image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }}
            />

            <View style={Styles.card} />
            <Text style={Styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3) + '...'
                    : name}

            </Text>
            <Text style={Styles.price}>
                ${price}

            </Text>
            {
                inStock > 0 ? <View style={{ marginBottom: 60 }}>
                    <Button title={'Buy'} color={'green'} onPress={buy} />
                </View>
                    :
                    <View style={{ marginBottom: 70 }}>
                        <Button title={'view'} color={'red'} />

                    </View>
            }
        </View>
        
    </>
}

const Styles = StyleSheet.create({
    container: {
        width: width - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: "center",
        elevation: 8,
        backgroundColor: "white"
    },
    image: {
        width: width - 20,
        height: width / 1.7 - 100,
        // backgroundColor: "transparent",
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 1.7 - 20 - 130,
        backgroundColor: "transparent",
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
    },
    price: {
        fontSize: 20,
        marginBottom: 10,
        color: 'orange'

    }

})
export default ProductCard