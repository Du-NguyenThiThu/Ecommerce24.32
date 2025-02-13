import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { PCProps } from '../../TypesCheck/ProductsTypesCheck'

type Props = {}

const ProductCard = ({ ProductParams, PC, PCStyles }: PCProps) => {
    return (
        <Pressable
            key={PC.index}
            style={sty(PCStyles?.width, PCStyles?.marginHorizontal, PCStyles?.marginBottom).pcContainer}
            onPress={PC.onPress}
        >
            <Image
                source={{ uri: ProductParams?.images[0].imageUrl }}
                style={{
                    resizeMode: PCStyles?.resizeMode,
                    height: 180, width: "100%", borderRadius: 9
                }}
            />
            <Text
                numberOfLines={1}
                style={[{
                    fontSize: 15, fontWeight: "500", marginBottom: 5
                }, Txt(PCStyles.textAlign).text]}

            >
                {ProductParams.name}
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text
                    numberOfLines={1}
                    style={[{
                        fontSize: 15, fontWeight: "500", marginBottom: 5
                    }, Txt(PCStyles.textAlign).text]}

                >
                    ${ProductParams?.price}
                </Text>
            </View>
            <View
                style={{
                    position: "absolute", padding: 5, backgroundColor: "rgba(100,100,100,0.4)", borderRadius: 20,
                    right: 10, top: 10
                }}
            >
                <Pressable onPress={PC.toggleFavorite}>
                    {ProductParams.isFavorite ? (
                        <Image
                            source={{ uri: "http://172.20.10.3:8081/assets/assets/favoriteFilled.png" }}
                            style={{ width: 20, height: 20 }}
                        />
                    ) : (
                        <Image
                            source={{ uri: "http://172.20.10.3:8081/assets/assets/favorite.png" }}
                            style={{ width: 20, height: 20 }}
                        />
                    )}

                </Pressable>
            </View>

        </Pressable>
    )
}

export default ProductCard


const sty = (width?: number, marginHorizontal?: number, marginBottom?: number) => ({
    pcContainer: {
        width,
        marginBottom,
        marginHorizontal,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 9,
        backgroundColor: "#fff"
    }
})

const Txt = (textAlign?: "center" | "auto" | "left") => ({
    text: {
        textAlign
    }
})