import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductContainer from '../screen/productContainer';
import Profile from '../screen/profile';
import Cart from '../screen/cart';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MyIcon from 'react-native-vector-icons/FontAwesome'
const Tab = createBottomTabNavigator();
export default Navigation = () => {
    return <>
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'shopping-cart'
                : 'shopping-cart';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            }
            else if (route.name === 'Cart') {
                iconName = focused ? 'shopping-cart' : 'shopping-cart';
              }

            // You can return any component that you like here!
            return<>
            {/* <Ionicons name={iconName} size={size} color={color} /> */}
            <MyIcon name={iconName} size={size} color={color} />
                
            </> ;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}

            
            >
                <Tab.Screen name="Home" component={ProductContainer} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Profile" component={Profile} />

            </Tab.Navigator>




        </NavigationContainer>

    </>
}