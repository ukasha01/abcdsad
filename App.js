/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import ProductContainer from './src/screen/productContainer';
import Header from './src/components/shared/header';
import { NativeBaseProvider } from 'native-base';
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  })
  return <NativeBaseProvider>
    <Header />
    <ProductContainer />
  </NativeBaseProvider>
}

export default App;
