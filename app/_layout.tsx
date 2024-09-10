import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SFPRODISPLAYREGULAR: require("../assets/fonts/SFPRODISPLAYREGULAR.ttf"),
    SFPRODISPLAYMEDIUM: require("../assets/fonts/SFPRODISPLAYMEDIUM.ttf"),
    SFPRODISPLAYSEMIBOLDITALIC: require("../assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.ttf"),
    SFPRODISPLAYBOLD: require("../assets/fonts/SFPRODISPLAYBOLD.ttf"),
    SFPRODISPLAYHEAVYITALIC: require("../assets/fonts/SFPRODISPLAYHEAVYITALIC.ttf"),
    SFPRODISPLAYBLACKITALIC: require("../assets/fonts/SFPRODISPLAYBLACKITALIC.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
