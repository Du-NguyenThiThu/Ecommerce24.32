import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Tablist } from '../../TypesCheck/ProductsTypesCheck'
import Animated, { Extrapolation, interpolate, interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import CatAnimationComponent from './CatAnimationComponent';

type Props = {}

interface catListParams {
    TabLst: Tablist[];
    scrollY: SharedValue<number>;
    onPress: (id: string) => void;
    activeCat?: string
}

interface RenderCatItems {
    item: Tablist
}
const CategoryAnimation = ({ TabLst, scrollY, onPress, activeCat }: catListParams) => {



    const [catData, setCatData] = useState(TabLst)


    const animateCatHeader = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollY.value,
                        [85, 90],
                        [-50, 0],
                        Extrapolation.CLAMP
                    )
                }
            ]
        }
    })


    const animateCatList = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            scrollY.value,
            [85, 90],
            ["#000", "#000"],
            "RGB"
        )
        return {
            backgroundColor
        }
    })


    const animateCatListHt = useAnimatedStyle(() => {
        const height = interpolate(
            scrollY.value,
            [85, 90],
            [0, 25],
            Extrapolation.CLAMP
        )
        return {
            height
        }
    })



    const renderCatListItems = ({ item }: RenderCatItems) => (
        <CatAnimationComponent

            tabList={{
                "_id": item._id, "name": item.name, "onPress": () => onPress(item._id), "activeCat": activeCat
            }}
            scrollY={scrollY}
        />
    )
    return (
        <>
            <Animated.View
                style={[{
                    zIndex: 99
                }, animateCatHeader, animateCatList, animateCatListHt

                ]}
            >
                <Animated.FlatList
                    data={catData}
                    renderItem={renderCatListItems}
                    keyExtractor={(_, index) => `list${index}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </Animated.View>
        </>
    )
}

export default CategoryAnimation