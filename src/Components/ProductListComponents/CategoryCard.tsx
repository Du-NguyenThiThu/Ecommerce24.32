import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICatParams } from '../../TypesCheck/ProductsTypesCheck';


type Props = {}

const CategoryCard = ({ catProps, catStyleProps }: ICatParams) => {
    let isActive = catProps._id == catProps.activeCat;
    let borderColor = isActive ? "#fff" : "grey"
    let borderWidth = isActive ? 2 : 1
    let textColor = isActive ? "orange" : "white"


    return (
        <View>
            <Pressable key={catProps._id} onPress={catProps.onPress} style={sty.container}>
                {catProps?.image !== undefined &&

                    <View style={[sty.imageContainer, { borderColor: borderColor, borderWidth: borderWidth }]}>
                        <Image
                            source={{ uri: catProps?.image }}
                            style={st(catStyleProps.width, catStyleProps.height, catStyleProps.radius).imgStyleProps}
                            resizeMode={catStyleProps.resizeMode}
                        />

                    </View>
                }

                <Text style={[sty.catName, { color: textColor }]}>{catProps.name}</Text>

            </Pressable>
        </View>
    )
}

export default CategoryCard

const sty = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 5,
        margin: 3
    },
    imageContainer: {
        borderRadius: 20,
        padding: 3
    },
    catName: {
        fontSize: 13,
        fontWeight: "bold"
    }
})


const st = (width?: number, height?: number, radius?: number) => ({
    imgStyleProps: {
        width,
        height,
        borderRadius: radius
    }
})