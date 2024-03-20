import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantScreen";
import { useFonts as useOswald , Oswald_400Regular} from "@expo-google-fonts/oswald";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

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
        <RestaurantsScreen  />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
