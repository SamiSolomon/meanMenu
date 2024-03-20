import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantScreen";

import { useFonts as Oswald_400Regular, Oswald_400Regular} from "@expo-google-fonts/oswald";
import { useFonts as Lato_400Regular, Lato_400Regular} from "@expo-google-fonts/lato";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoLoaded] = useFonts({
    Lato_400Regular,
  })


  if(!oswaldLoaded  || !latoLoaded){
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen  />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
