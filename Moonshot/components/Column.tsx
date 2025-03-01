import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps & {
    gap?: number,
}

export function Column({style, gap, ...rest}: Props) {
    return <View style={[rowStyle, style, gap ? {gap : gap} : undefined]} {...rest}></View>
}

const rowStyle = {
    flex: 0,
    flexDirection : 'column',
    alignItems: 'center',
} satisfies ViewStyle