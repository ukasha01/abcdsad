import { background } from "native-base/lib/typescript/theme/styled-system";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from 'react-native-swiper/src'
const { width } = Dimensions.get('window')
const Banner = () => {
    const [myBanner, setBanner] = useState([])
    useEffect(() => {
        setBanner(["https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000",
            "https://image.shutterstock.com/image-vector/dark-wide-abstract-banner-grey-260nw-1804227037.jpg",
            "https://image.shutterstock.com/image-vector/abstract-black-wide-horizontal-banner-260nw-2030617106.jpg"
        ])
        
    }, [])

    return <ScrollView>

        <View style={styles.container}>
            <View style={styles.swiper}>

                <Swiper
                    style={{ height: width / 2 }}
                    showButtons={true}
                    // autoplay={true}
                    autoplayTimeout={1}
                     autoplayDirection={false}>
                    {myBanner.map((item) =>
                        <Image
                            key={item}
                            style={styles.imgBanner}
                            resizeMode='contain'
                            source={{ uri: item }}

                        />)}
                </Swiper>
                <View style={{ height: 20 }}></View>
            </View>
        </View>
    </ScrollView>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10,
    },
    imgBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner