import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screen
import HomeScreen from "../app/index"
import LoginScreen from "../app/screens/loginPage";

// Screen Names
const homeName = 'Home';
const loginName = 'Login';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === homeName) {
                                iconName = focused ? require('@/assets/ionicons/home.svg') : require('@/assets/ionicons/home-outline.svg');
                            } else if (rn === loginName) {
                                iconName = focused ? require('@/assets/ionicons/list.svg') : require('@/assets/ionicons/list-outline.svg');
                            }
                        }
                    })}>
                    <Tab.Screen name={homeName} component={HomeScreen} />
                    <Tab.Screen name={loginName} component={LoginScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
};

export default App;