import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantScreen";
import { useFonts as useOswald , Oswald_400Regular} from "@expo-google-fonts/oswald";
import {Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

const Tab = createBottomTabNavigator();

const Settings =()=> <Text>Settings</Text>;
const Map =()=> <Text>Map</Text>;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  
  if(!oswaldLoaded ){
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
