import React from "react"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import OnboardingScreen from "../Screens/OnboardingScreen"
import TabsNavigator, { TabsStackParams } from "./TabsNavigation"
import { NavigatorScreenParams } from "@react-navigation/native"
import FashionCategory from "../Screens/FashionCategory"
import { colProps, ImageProps, sizeProps } from "../TypesCheck/ProductsTypesCheck"
import ProductDetails from "../Screens/ProductDetails";
import CartScreen from "../Screens/CartScreen";


export type RootStackParams = {
    OnboardingScreen: undefined
    TabsStack: NavigatorScreenParams<TabsStackParams>
    fashionCategory: {
        item: {
            _id: string
            name?: string
        }
    }

    productDetails: {
        item: {
            _id: string;
            name: string;
            images: ImageProps[];
            description?: string;
            price: number;
            oldPrice?: number;
            quantity?: number;
            isTopPick?: boolean;
            isFavorite?: boolean;
            sizes?: sizeProps[];
            color?: colProps[];
            inStock?: boolean;
            category?: string;
            subCategory?: string;
            parentId?: string
            createAt?: Date
            updatedAt?: Date
        }
    }

    CartDetail: {

        _id?: string;
        name?: string;
        images?: ImageProps;
        description?: string;
        price?: number;
        oldPrice?: number;
        quantity?: number;
        isTopPick?: boolean;
        isFavorite?: boolean;
        sizes?: sizeProps;
        color?: colProps;
        inStock?: boolean;
        category?: string;
        subCategory?: string;
        parentId?: string
        createAt?: Date
        updatedAt?: Date
    }
}



const RootStack = createNativeStackNavigator<RootStackParams>();
export type RootStackScreenProps<T extends keyof RootStackParams> = NativeStackScreenProps<RootStackParams, T>;
const RootNavigator = () => {

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="TabsStack"
                component={TabsNavigator}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="fashionCategory"
                component={FashionCategory}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="productDetails"
                component={ProductDetails}
                options={{ headerShown: false }}
            />


        </RootStack.Navigator>
    )
}
export default RootNavigator
