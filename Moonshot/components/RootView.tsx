import { useThemeColors } from "@/hooks/useThemeColors"
import { Platform, SafeAreaView, StatusBar, ViewProps, ViewStyle } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

type Props = ViewProps

export function RootView({style, ...rest}: Props) {
    const colors = useThemeColors()
    return (
        <SafeAreaProvider> 
      <StatusBar translucent/>
      <SafeAreaView style={[RootStyle, {backgroundColor: colors.tint}, style]} {...rest}></SafeAreaView>
    </SafeAreaProvider>
    )
}

const RootStyle = {
    flex: 1,
    padding: 4,
    ...Platform.select({
      ios:{
        gap: 2,
      },
      android: {
        gap: 2,
      },
      web: {
        gap: 8,
      }
      }),
  } satisfies ViewStyle;