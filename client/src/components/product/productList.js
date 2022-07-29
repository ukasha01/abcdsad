import React from "react";
import { TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import ProductCard from "./ProductCard.js";
const { width } = Dimensions.get('window')
export default function ProductList({ item }) {

    return <ScrollView>

        <TouchableOpacity style={{ width: '50%' }}>
            <View style={{
                width: width / 2,
                backgroundColor: 'gainsboro'
            }}>


            </View>

        </TouchableOpacity>
        <ProductCard
            {...item}
        />
    </ScrollView>

}