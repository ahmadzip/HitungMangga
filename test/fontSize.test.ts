import { DEFAULT_FONT_SIZE, fontScales, isFontSizePreset, scaleFontSize } from "../src/utils/fontSize";

function assertEqual<T>(actual: T, expected: T, message: string) {
  if (!Object.is(actual, expected)) {
    throw new Error(message);
  }
}

assertEqual(isFontSizePreset("small"), true, "Preset small harus valid");
assertEqual(isFontSizePreset("normal"), true, "Preset normal harus valid");
assertEqual(isFontSizePreset("large"), true, "Preset large harus valid");
assertEqual(isFontSizePreset("extra-large"), false, "Preset asing harus ditolak");
assertEqual(isFontSizePreset(null), false, "Nilai non-string harus ditolak");
assertEqual(scaleFontSize(DEFAULT_FONT_SIZE, fontScales.small), 12.6, "Ukuran default kecil harus benar");
assertEqual(scaleFontSize(18, fontScales.normal), 18, "Preset normal tidak boleh mengubah ukuran");
assertEqual(scaleFontSize(18, fontScales.large), 20.7, "Ukuran eksplisit besar harus benar");
assertEqual(scaleFontSize(24, fontScales.large), 27.6, "Line height besar harus benar");
