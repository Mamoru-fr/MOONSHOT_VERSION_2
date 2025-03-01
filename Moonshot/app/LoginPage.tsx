import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react"
import { Button, StyleSheet, TextInput } from "react-native";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username == 'admin' && password == 'password') {
            alert('Connexion réussi');
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.')
        }
    };

    return (
        <RootView style={styles.container}>
            <ThemedText style={styles.title}>Connexion</ThemedText>
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Se connecter" onPress={handleLogin} />
        </RootView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center'
    },
    title: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default LoginScreen;