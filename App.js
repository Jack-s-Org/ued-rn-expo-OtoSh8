import React, { useEffect, useState } from 'react';
import RootNavigator from "./screens/RootNavigator";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    'K2D': require('@/assets/fonts/K2D.ttf'),
    'K2DBOLD': require('@/assets/fonts/K2DBold.ttf'),

    // Add more fonts here if needed
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    };

    loadResources();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // You can optionally return a loading indicator or just null
  }

  return <RootNavigator />;
}
