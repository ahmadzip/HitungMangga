import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { fontScales, isFontSizePreset, type FontSizePreset } from "../utils/fontSize";

type FontSizeContextType = {
  fontSizePreset: FontSizePreset;
  fontScale: number;
  setFontSizePreset: (preset: FontSizePreset) => void;
};

const STORAGE_KEY = "mangga_font_size_v1";
const DEFAULT_PRESET: FontSizePreset = "normal";

const FontSizeContext = createContext<FontSizeContextType | null>(null);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSizePreset, setFontSizePreset] = useState<FontSizePreset>(DEFAULT_PRESET);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFontSize() {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);

        if (isFontSizePreset(stored)) {
          setFontSizePreset(stored);
        }
      } catch {
      } finally {
        setLoaded(true);
      }
    }

    loadFontSize();
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    async function saveFontSize() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, fontSizePreset);
      } catch {
      }
    }

    saveFontSize();
  }, [fontSizePreset, loaded]);

  return (
    <FontSizeContext.Provider
      value={{
        fontSizePreset,
        fontScale: fontScales[fontSizePreset],
        setFontSizePreset,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);

  if (!context) {
    throw new Error("useFontSize harus digunakan di dalam FontSizeProvider");
  }

  return context;
}
