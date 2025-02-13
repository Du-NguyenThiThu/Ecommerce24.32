import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../Navigation/RootNavigator'
import CategoryCard from '../ProductListComponents/CategoryCard'
import { CategoryParams } from '../../TypesCheck/ProductsTypesCheck'
import { Category } from '../../Data/EcommerceAppData'


interface renderCatProps {
    item: CategoryParams
}
const FlashSalesMain = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    const [catData, setCatData] = useState<CategoryParams[]>(Category)

    const handlePress = async (item: CategoryParams) => {
        navigation.navigate("fashionCategory")
        // navigation.navigate("fashionCategory", {item})
    }
    const renderItems = ({ item }: renderCatProps) => (
        <CategoryCard
            catProps={{
                "_id": item._id, "name": item.name, "image": item.image,
                "onPress": () => handlePress(item)
            }}
            catStyleProps={{
                "width": 55, "height": 55, "radius": 99, "resizeMode": "contain"
            }}
        />
    )

    return (
        <View>
            <View style={{ marginTop: 4 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    data={catData}
                    keyExtractor={(_, index) => `cat_items${index}`}
                    renderItem={renderItems}

                />
            </View>
        </View>

    )
}

export default FlashSalesMain