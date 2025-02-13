import { View, Text } from 'react-native'
import React from 'react'

type Props = {}
interface TextProps {
    text?: string;
    tStyle: {
        color?: string;
        ftSz: number;
        ftW?: "bold" | "500" | "normal";
        txtA?: "left" | "center" | "auto"
    }

    numOfLines?: number
}
const CustomText = ({ text, tStyle, numOfLines }: TextProps) => {
    return (
        <View>
            <Text
                numberOfLines={numOfLines}
                style={[Txt(tStyle.ftSz, tStyle.ftW, tStyle.txtA, tStyle.color).text]}
            >
                {text}

            </Text>
        </View>
    )
}

export default CustomText


const Txt = (ftSz?: number, ftW?: "bold" | "500" | "normal", txtA?: "center" | "auto" | "left", color?: string) => ({
    text: {
        textAlign: txtA,
        fontSize: ftSz,
        fontWeight: ftW,
        color
    }
})