import { View, Text, Platform, FlatList, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { RootStackScreenProps } from '../Navigation/RootNavigator'
import { SafeAreaView } from 'react-native'
import CategoryAnimation from '../Components/ProductListComponents/CategoryAnimation'
import { productClass, Products, subCategories } from '../Data/EcommerceAppData'
import { useSharedValue } from 'react-native-reanimated'
import { CategoryParams, IProductClassParams, IProducts } from '../TypesCheck/ProductsTypesCheck'
import CustomText from '../Components/CustomText'
import ProductCard from '../Components/ProductListComponents/ProductCard'
import CategoryCard from './../Components/ProductListComponents/CategoryCard';

type Props = {}
interface renderCatProps {
    item: CategoryParams
}
interface renderProductProps {
    item: IProductClassParams
}

const FashionCategory = ({ navigation, route }: RootStackScreenProps<"fashionCategory">) => {
    const { item } = route.params

    const cate = subCategories.filter((cat) => cat.catId === item._id)

    const [selectedCat, setSelectedCat] = useState(cate[0]._id)

    const handlePress = (id: string) => {
        setSelectedCat(id)
    }

    const selectedProductClass = productClass.filter(product => product.parentId === selectedCat)

    const [productData, setProductData] = useState<IProducts[]>(Products)
    const [favorite, setFavorite] = useState<IProducts[]>([])


    const scrollY = useSharedValue(0)



    const toggleFavorite = (item: IProducts) => {

        setProductData(
            productData.map((prod) => {
                if (prod._id === item._id) {
                    return {
                        ...prod,
                        isFavorite: !prod.isFavorite,
                    }
                }

                return prod;
            })
        )

        setFavorite((prev) => {
            const isPresent = prev.some((prevItem) => prevItem._id === item._id)
            if (isPresent) {
                return prev.filter((list) => list._id !== item._id)
            } else {
                return [...prev, { ...item, isFavorite: !item.isFavorite }]
            }
        })
    }

    const handleNav = (item: IProducts) => {
        navigation.navigate("productDetails", { item })
    }
    const rendersubCatItems = ({ item }: renderCatProps) => (
        <CategoryCard
            catProps={{
                "_id": item._id, "name": item.name, "image": item.image,
                "onPress": () => handlePress(item._id), "activeCat": selectedCat
            }}
            catStyleProps={{
                "width": 55, "height": 55, "radius": 99, "resizeMode": "contain"
            }}
        />
    )


    const renderProductItems = ({ item }: renderProductProps) => (

        <View key={item._id} style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <View
                key={item._id}
                style={{
                    flexDirection: "row", justifyContent: "space-between",
                }}
            >
                <CustomText
                    text={item.name}
                    tStyle={{
                        "ftSz": 15, "ftW": "bold", "color": "yellow"
                    }}
                />

                <Pressable onPress={() => alert("see all")}>
                    <CustomText
                        text='See All'
                        tStyle={{
                            "ftSz": 15, "ftW": "bold", "color": "yellow"
                        }}
                    />

                </Pressable>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {productData.filter(product => product.parentId === item._id).map((productList, index) => (
                    <View key={index}>
                        <ProductCard
                            ProductParams={productList}

                            PCStyles={{
                                "width": 166, "height": 70, "textAlign": "left", "marginHorizontal": 5, "marginBottom": 10,

                            }}
                            PC={{
                                "index": index, "toggleFavorite": () => toggleFavorite(productList),
                                "onPress": () => handleNav(productList)
                            }}
                        />
                    </View>
                ))}

            </ScrollView>

        </View>

    )

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1 }}>
            <View style={{ backgroundColor: "#000", flex: 1 }}>
                {/* <HeaderComponent pageTitle={item.name} goToPrevious={navigation.goBack} /> */}
                <CategoryAnimation
                    TabLst={cate}
                    scrollY={scrollY}
                    activeCat={selectedCat}
                    onPress={handlePress}
                />
                <ScrollView
                    onScroll={(e) => {
                        scrollY.value = e.nativeEvent.contentOffset.y
                    }}
                >
                    <View style={{ marginTop: 4 }}>

                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 10 }}
                            data={cate}
                            renderItem={rendersubCatItems}
                            keyExtractor={(_, index) => `list${index}`}

                        />

                    </View>

                    <View style={{ marginTop: 4 }}>
                        <FlatList
                            scrollEnabled={false}
                            data={selectedProductClass}
                            renderItem={renderProductItems}
                            keyExtractor={(_, index) => `list${index}`}
                        />

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default FashionCategory