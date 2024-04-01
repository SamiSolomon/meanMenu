import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useFonts as useOswald , Oswald_400Regular} from "@expo-google-fonts/oswald";

import { Navigation } from "./src/infrastructure/navigation";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
enableScreens(); // Initialize react-native-screens
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
      <FavoritesContextProvider>
      <LocationContextProvider> 
      <RestaurantsContextProvider> 
           <Navigation />
      </RestaurantsContextProvider>
      </LocationContextProvider>
      </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
