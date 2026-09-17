import type { MangoType } from "../src/types/mango";
import {
  isDuplicateTypeName,
  normalizeTypeName,
  parseNonNegativeNumber,
  parseNumberInput,
  parsePositiveNumber,
} from "../src/utils/validation";

function assertEqual<T>(actual: T, expected: T, message: string) {
  if (!Object.is(actual, expected)) {
    throw new Error(message);
  }
}

const types: MangoType[] = [{ id: "dr1", name: "DR 1", entries: [] }];

assertEqual(parseNumberInput("5,5"), 5.5, "Koma desimal harus didukung");
assertEqual(parseNumberInput("Infinity"), null, "Angka harus finite");
assertEqual(parsePositiveNumber("0"), null, "Berat harus lebih dari nol");
assertEqual(parsePositiveNumber("-1"), null, "Berat negatif harus ditolak");
assertEqual(parseNonNegativeNumber("0"), 0, "Berat peti nol harus valid");
assertEqual(parseNonNegativeNumber("-1"), null, "Berat peti negatif harus ditolak");
assertEqual(normalizeTypeName("  dr 1  "), "DR 1", "Nama jenis harus dirapikan dan dijadikan huruf besar");
assertEqual(normalizeTypeName("   "), "", "Nama kosong harus tetap kosong");
assertEqual(isDuplicateTypeName(types, "dr 1"), true, "Duplikat harus case-insensitive");
assertEqual(isDuplicateTypeName(types, "DR 2"), false, "Nama berbeda harus diterima");
