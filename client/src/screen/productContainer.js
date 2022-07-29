import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import ProductList from "../components/product/productList";
import { VStack, Input, Icon, Heading } from "native-base";
import Search_Product from "../components/product/searchProduct";
// import { Ionicons } from "@expo/vector-icons";
const Productdata = require('../data/product.json')
const ProductContainer = () => {
    const [data, setData] = useState([])
    const [productFilltered, setProductFiltered] = useState([])
    const [focus, setFocus] = useState()
    useEffect(() => {
        setData(Productdata)
        setProductFiltered(Productdata)
        setFocus(false)
        return () => {
            setData([])
            setProductFiltered([])
            

        }
    }, [])

    const searchProduct = (text) => {
        setProductFiltered(
            data.filter(i => i.name.toLowerCase().includes(text.toLowerCase())))
    }
    const openList = () => {
        setFocus(true)
    }
    const onBlur = () => {
        setFocus(false)
    }
    return <View>


        <Input
            onFocus={openList}
            onChangeText={text => searchProduct(text)}
            style={Styles.input} placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="white" />} />
        {focus == true ? (
            <Search_Product
                productFilltered={productFilltered}
            />
        ) : (
            <View>

                <Text>Products</Text>
                <FlatList

                    data={data}
                    renderItem={({ item }) => <ProductList
                        key={item.id}
                        item={item}
                    />}
                />

            </View>
        )}

    </View >


}

const Styles = StyleSheet.create({
    input: {

    }
})

export default ProductContainer