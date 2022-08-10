import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductCard from '../components/product/ProductCard';
import Card from '../components/product/detailecard'
const Stack = createNativeStackNavigator()
const StackNavigation = ({item}) => {
   
    return <>

        <NavigationContainer>

            <Stack.Navigator initialRouteName='Product Card'>
                <Stack.Screen name="Product Card" Component={ProductCard} />
                <Stack.Screen name="Card" Component={Card} />


            </Stack.Navigator>
        </NavigationContainer>
    </>
}
export default StackNavigation
