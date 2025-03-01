import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps

export function FareCard({style, ...rest}: Props) {
    const colors = useThemeColors()
    return <View style={[style, BoxStyle, {backgroundColor: colors.grayWhite}]} {...rest}></View>
}

const BoxStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    ...Shadows.dp2,
} satisfies ViewStyle
