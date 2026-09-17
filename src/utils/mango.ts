import { MangoEntry } from "../types/mango";

export function getTotalWeight(entries: MangoEntry[]) {
  return entries.reduce((sum, entry) => sum + entry.weight, 0);
}

export function getNetWeight(totalWeight: number, crateCount: number, crateWeight: number) {
  return Math.max(0, totalWeight - crateCount * crateWeight);
}
