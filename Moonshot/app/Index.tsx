import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { ThemeColors, useThemeColors } from "@/hooks/useThemeColors";
import { Image, Platform, StyleSheet } from "react-native";

export default function Index() {
    const colors = useThemeColors()
    const theme = ThemeColors()
    return (
        <RootView>
            <Row style={styles.header}>
                <ThemedText variant='headline' color="grayLight">Moonshot</ThemedText>
            </Row>
            <Box style={styles.body}>
            
            </Box>
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
