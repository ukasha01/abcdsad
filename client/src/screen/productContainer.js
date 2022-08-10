import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Button } from "react-native";
import ProductList from "../components/product/productList";
import { VStack, Input, Heading } from "native-base";
import Icon from 'react-native-vector-icons/EvilIcons'
import Search_Product from "../components/product/searchProduct";
import Banner from "../components/shared/banner";
// import { Ionicons } from "@expo/vector-icons";
const Productdata = require('../data/product.json')
import { useDispatch , useSelector,connect } from "react-redux";
import {getAllProduct} from '../store/action/productAction'
const ProductContainer = () => {
    const dispatch =  useDispatch()
    const [data, setData] = useState([])
    const [productFilltered, setProductFiltered] = useState([])
    const [focus, setFocus] = useState()
    
    useEffect(() => {
        dispatch(getAllProduct())
        // setData(Productdata)
        setProductFiltered(Productdata)
        setFocus(false)
        return () => {
            setData([])
            setProductFiltered([])


        }
    }, [])
    const {product} = useSelector(state=>state.productReducer) 
    const searchProduct = (text) => {
        

        setProductFiltered(
            product.filter(i => i.name.toLowerCase().includes(text.toLowerCase())))
    }
    const openList = () => {
        setFocus(true)
    }
    const onBlur = () => {
        setFocus(false)
    }
    return <View>

<Button  onPress={()=> dispatch(getAllProduct())} title="click"/>
        <Input

            onFocus={openList}
            // onBlur={onB
            onChangeText={text => searchProduct(text)}
            style={Styles.input}
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1" px="2"
            borderWidth="0"
       
           
            InputLeftElement={<Icon name="search" size={40} />}
            InputRightElement={focus ? <Icon onPress={onBlur} name="close"
                size={30}
            /> : null}
        />

        {focus == true ? (
            <Search_Product
                productFilltered={productFilltered}
            />
        ) : (
            <View>

                <View>

                    <Banner />
                </View>

                <FlatList

                    data={product}
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
})

export default connect()(ProductContainer)