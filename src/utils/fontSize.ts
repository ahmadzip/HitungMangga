export const fontScales = {
  small: 0.9,
  normal: 1,
  large: 1.15,
} as const;

export type FontSizePreset = keyof typeof fontScales;

export const DEFAULT_FONT_SIZE = 14;

export function isFontSizePreset(value: unknown): value is FontSizePreset {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(fontScales, value);
}

export function scaleFontSize(value: number, scale: number) {
  return Math.round(value * scale * 100) / 100;
}
