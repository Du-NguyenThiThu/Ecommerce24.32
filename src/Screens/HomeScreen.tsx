import { View, Text, Platform, ScrollView, SectionList } from 'react-native'
import React, { useRef } from 'react'
import { TabsStackScreenProps } from '../Navigation/TabsNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { HeaderComponent } from '../Components/HeaderComponents/HeaderComponent'
import ImageSlider from '../Components/HomeScreenComponents/ImageSlider'
import FlashSalesMain from '../Components/FlashSalesComponents/FlashSalesMain'
import ProductListMain from '../Components/ProductListComponents/ProductListMain'
const sectionListData = [
    { title: "FlashSales", data: [{}], renderItem: () => <FlashSalesMain /> },
    { title: "ProductsSection", data: [{}], renderItem: () => <ProductListMain /> }
]

type Props = {}
const HomeScreen = ({ navigation, route }: TabsStackScreenProps<"Home">) => {
    const sectionListRef = useRef<SectionList>(null)

    const gotoCartScreen = () => {
        navigation.navigate("Cart")
    }
    const sliderImages = [
        "https://gomsuhcm.com/wp-content/uploads/2023/12/Tho-tet-2-cau-hai-huoc-cho-nam-2024.jpg", // Network image
        "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/10/tho-chuc-tet-hai-huoc-thumbnail.jpg",
        "https://i.ytimg.com/vi/OvUolZfolQc/maxresdefault.jpg",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/408/770/products/d373f758-620f-4da0-b31e-6c993c0195fe.jpg"
        //require('../../assets/sliderImages/si1.jpg')
    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: "white" }}>
            {/* <HeaderComponent gotoCartScreen={gotoCartScreen} /> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                style={{ backgroundColor: "#efg" }}
            >
                <ImageSlider images={sliderImages} />
            </ScrollView>
            <View style={{ backgroundColor: "blue", flex: 1 }}>
                <SectionList
                    sections={sectionListData}
                    overScrollMode='always'
                    showsVerticalScrollIndicator={false}
                    ref={sectionListRef}
                    // onScroll={onScroll}
                    bounces={false}
                    nestedScrollEnabled
                    keyExtractor={(item) => item.key}
                // renderSectionHeader={({ section }) => {
                // if (section.title !== "ProductsSection") {
                //     return null
                // }
                // // return (
                //     <Animated.View style={[isProductSectionVisible ? style.addShadow : null]}>
                //         <ProductFilter TabList={TabListData} />
                //     </Animated.View>
                // )
                // }}
                // stickySectionHeadersEnabled={true}
                // viewabilityConfig={viewabilityConfig}
                // onViewableItemsChanged={onViewableItemsChanged}
                />
            </View>
        </SafeAreaView >
    )
}

export default HomeScreen