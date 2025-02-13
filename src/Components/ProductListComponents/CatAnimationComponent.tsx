import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Tablist } from '../../TypesCheck/ProductsTypesCheck'
import { SharedValue } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'

type Props = {}

interface TabListAnimation {
    tabList: Tablist
    scrollY: SharedValue<number>
}

const CatAnimationComponent = ({ tabList, scrollY }: TabListAnimation) => {

    let isActive = tabList._id == tabList.activeCat;
    let borderColor = isActive ? "#fff" : "grey"
    let borderWidth = isActive ? 2 : 0
    let textColor = isActive ? "orange" : "white"
    return (
        <Pressable style={{ marginHorizontal: 10 }} key={tabList._id} onPress={tabList.onPress}>
            <Text numberOfLines={2} style={[sty.catName, { color: textColor }]}>{tabList.name}</Text>
        </Pressable>
    )
}

export default CatAnimationComponent


const sty = StyleSheet.create({

    catName: {
        fontSize: 15,
        fontWeight: "bold"
    }
})