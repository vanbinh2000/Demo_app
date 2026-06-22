import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './Home';
import LoginScreen from'./Login'
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
    )
};