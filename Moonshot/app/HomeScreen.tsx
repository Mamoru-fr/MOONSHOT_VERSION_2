import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText"
import { StyleSheet } from "react-native"

const HomeScreen = () => {
    return (
        <RootView style={styles.container}>
            <ThemedText style={styles.title}>Bienvenue sur la page d'accueil</ThemedText>
        </RootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    }
});

export default HomeScreen;