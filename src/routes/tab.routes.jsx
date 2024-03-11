import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#FFF"
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'black',
        
        }}>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({focused}) => <Feather name="home" size={24} color={focused ? "#131313" : "#D6D6D6"} />}}  /> 
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused}) => <Feather name="user" size={24} color={focused ? "#131313" : "#D6D6D6"} />}}/>
            <Tab.Screen name="Category" component={Category} options={{tabBarIcon: ({focused}) => <Feather name="list" size={24} color={focused ? "#131313" : "#D6D6D6"} />}}/>
        </Tab.Navigator>
    );
    }

export default TabRoutes;

    