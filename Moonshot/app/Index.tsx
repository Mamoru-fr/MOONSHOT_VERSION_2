import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '@/app/screens/loginPage';
import HomeScreen from '@/app/screens/homeScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' options={{title: 'Login'}} component={LoginScreen} />
                <Stack.Screen name='Home' options={{title: 'Home'}} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;