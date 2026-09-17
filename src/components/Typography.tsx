import { forwardRef } from "react";

import {
  StyleSheet,
  Text as NativeText,
  TextInput as NativeTextInput,
  type TextInputProps,
  type TextProps,
  type TextStyle,
} from "react-native";

import { useFontSize } from "../store/FontSizeContext";
import { DEFAULT_FONT_SIZE, scaleFontSize } from "../utils/fontSize";

function getScaledStyle(style: TextProps["style"], fontScale: number): TextStyle {
  const flattened = StyleSheet.flatten(style);
  const fontSize = flattened?.fontSize ?? DEFAULT_FONT_SIZE;

  return {
    fontSize: scaleFontSize(fontSize, fontScale),
    ...(flattened?.lineHeight === undefined
      ? null
      : { lineHeight: scaleFontSize(flattened.lineHeight, fontScale) }),
  };
}

export function Text({ style, ...props }: TextProps) {
  const { fontScale } = useFontSize();

  return <NativeText {...props} style={[style, getScaledStyle(style, fontScale)]} />;
}

export const TextInput = forwardRef<NativeTextInput, TextInputProps>(function TextInput({ style, ...props }, ref) {
  const { fontScale } = useFontSize();

  return <NativeTextInput ref={ref} {...props} style={[style, getScaledStyle(style, fontScale)]} />;
});
