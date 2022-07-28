import React from "react";
// import img from ''
import { View, Image, StyleSheet, SafeAreaView } from "react-native";

const Header = () => {
    return <>
        <View style={styles.header}>
            <Image
                source={require('../../assest/679-6791998_online-shopping-free-logo-clipart-png-download-online.png')}
                resizeMode='contain'
                style={{ height: 50  }}
            />

        </View>
    </>
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20
    }
})

export default Header