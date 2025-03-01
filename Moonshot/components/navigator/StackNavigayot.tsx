import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "@/app/screens/homeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
};

export default StackNavigator;