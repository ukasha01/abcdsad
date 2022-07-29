import { Box, FlatList, Heading, Avatar, HStack, VStack,Text, Spacer } from 'native-base'
import React from 'react'
import { View, StyleSheet } from 'react-native'

const Search_Product = ({ productFilltered }) => {
    return <>
        <View>
            {productFilltered.length > 0 ? (
                <FlatList data={productFilltered} renderItem={({
                    item
                }) => <Box borderBottomWidth="1" _dark={{
                    borderColor: "muted.50"
                }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                        <HStack space={[2, 3]} justifyContent="space-between">
                            <Avatar size="48px" source={{
                                uri: item.image
                            }} />
                            <VStack>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="coolGray.800" bold>
                                    {item.name}
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    {item.description}
                                </Text>
                            </VStack>
                                <Spacer/>

                        </HStack>
                    </Box>} keyExtractor={item => item._id} />



            )
                :
                (
                    <View style={styles.center}>
                        <Text style={{ alignSelf: 'center' }}>No product match the sealed criteria</Text>

                    </View>

                )
            }

        </View>
    </>
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Search_Product