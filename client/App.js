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
import { Provider } from 'react-redux';
import store from './src/store/root';
import BottomNavigation from './src/navigation/bottom Navigation';
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  })
  return <Provider store={store}>
    <NativeBaseProvider>
    <BottomNavigation />
    
      
    </NativeBaseProvider>
  </Provider>
}

export default App;
