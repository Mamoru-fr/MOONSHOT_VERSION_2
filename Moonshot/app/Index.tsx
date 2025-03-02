import { Box } from "@/components/Box";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { ThemeColors, useThemeColors } from "@/hooks/useThemeColors";
import { useNavigation } from "@react-navigation/native";
import { Button, Platform, StyleSheet } from "react-native";
import App from "../components/TabBarContainer";

export default function HomeScreen() {
    const navigation = useNavigation()
    const colors = useThemeColors()
    const theme = ThemeColors()
    return (
        <RootView>
            <Row style={styles.header}>
                <ThemedText variant='headline' color="grayLight">Moonshot</ThemedText>
            </Row>
            <Box style={styles.body}>
                <ThemedText variant='body3' color='grayLight'>This is the Home Page</ThemedText>
                <Button title="Login Page" />
            </Box>
            <App/>
        </RootView>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginHorizontal: 2,
    },
    header: {
        marginLeft: 8,
        marginTop: 8,
        justifyContent: 'space-between',
        ...Platform.select({
            ios: {
                padding: 4,
                marginBottom: 10,
            },
            android: {
                padding: 4,
                marginBottom: 10,
            },
            web: {
                padding: 12
            },
        })
    },
})
