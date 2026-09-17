import { Stack } from "expo-router";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../constants/colors";
import { FontSizeProvider } from "../store/FontSizeContext";
import { MangoProvider } from "../store/MangoContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <FontSizeProvider>
        <MangoProvider>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: colors.background,
            }}
            edges={["top", "left", "right"]}
          >
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: colors.background,
                },
              }}
            />
          </SafeAreaView>
        </MangoProvider>
      </FontSizeProvider>
    </SafeAreaProvider>
  );
}
