import { enableScreens } from 'react-native-screens';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useFonts as useOswald , Oswald_400Regular} from "@expo-google-fonts/oswald";

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState, useEffect } from 'react';
import { Navigation } from "./src/infrastructure/navigation";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';

// Importing just initializeApp from the compat library
import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/compat/auth'; // Changed import statement
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: "AIzaSyBPnGl73YFkLb6Wo-MFGIap5yp9_wuq2Dc",
  authDomain: "mealsmenu-9e74a.firebaseapp.com",
  projectId: "mealsmenu-9e74a",
  storageBucket: "mealsmenu-9e74a.appspot.com",
  messagingSenderId: "157932582912",
  appId: "1:157932582912:web:4d21e9825ea625a2d680e5",
  measurementId: "G-C7ZCCG13NP"
};

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth(); // Get the auth object from firebase directly

enableScreens(); // Initialize react-native-screens

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!oswaldLoaded) {
    return null;
  }

  return (
    <>
       <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
