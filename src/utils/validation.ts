import type { MangoType } from "../types/mango";

export function parseNumberInput(value: string) {
  const normalized = value.trim().replace(",", ".");

  if (!normalized) {
    return null;
  }

  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : null;
}

export function parsePositiveNumber(value: string) {
  const parsed = parseNumberInput(value);

  return parsed !== null && parsed > 0 ? parsed : null;
}

export function parseNonNegativeNumber(value: string) {
  const parsed = parseNumberInput(value);

  return parsed !== null && parsed >= 0 ? parsed : null;
}

export function normalizeTypeName(value: string) {
  return value.trim().toUpperCase();
}

export function isDuplicateTypeName(types: MangoType[], name: string) {
  return types.some((type) => type.name.toLowerCase() === name.toLowerCase());
}
