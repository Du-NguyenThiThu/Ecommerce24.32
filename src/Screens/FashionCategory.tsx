import { View, Text } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../Navigation/RootNavigator'
import { CategoryParams } from '../TypesCheck/ProductsTypesCheck'

type Props = {}
interface renderCatProps {
    item: CategoryParams
}

const FashionCategory = ({ navigation, route }: RootStackScreenProps<"fashionCategory">) => {
    const { item } = route.params

    const cate = subCategories.filter((cat) => cat.catId === item._id)

    const [selectedCat, setSelectedCat] = useState(cate[0]._id)

    const handlePress = (id: string) => {
        setSelectedCat(id)
    }
    return (
        <View>
            <Text>Fashion Category</Text>
        </View>
    )
}

export default FashionCategory