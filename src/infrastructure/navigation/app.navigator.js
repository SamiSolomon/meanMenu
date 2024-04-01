import { NavigationContainer } from '@react-navigation/native';
import { RestaurantsNavigator} from "./restaurants.navigator"
import { MapScreen } from '../../features/map/screens/map.screen';
import Ionicons from "@expo/vector-icons/Ionicons";
import {Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    
const Tab = createBottomTabNavigator();

const Tab_Icon = {
  Restaurant: "restaurant",
  Map: "map",
  Settings: "settings",
}

const Settings =()=> <Text>Settings</Text>;

    
export const AppNavigator = ()=> (
    <NavigationContainer>
        <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ size, color }) => {
                const iconName = Tab_Icon[route.name];
                return <Ionicons name={iconName} size={size} color={color} />;
                                 }})}
                tabBarOptions={{
                                 activeTintColor: 'tomato', // Color for the active tab
                                 inactiveTintColor: 'gray',  // Color for inactive tabs
                                }}
              >
          <Tab.Screen name="Restaurant" component={RestaurantsNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="Map"  component={MapScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        </Tab.Navigator>
    </NavigationContainer>
   );