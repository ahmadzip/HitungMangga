import type { MangoData } from "../types/mango";
import { formatKg } from "./format";
import { getTotalWeight } from "./mango";

export function buildShareMessage({ types }: MangoData) {
  const sections = types.map((type) => {
    const total = getTotalWeight(type.entries);
    const entries = type.entries.map((entry, index) => `${index + 1}. ${formatKg(entry.weight)}`);

    return [type.name, ...entries, `Total: ${formatKg(total)}`, `Jumlah: ${type.entries.length}`].join("\n");
  });

  const totalWeight = types.reduce((total, type) => total + getTotalWeight(type.entries), 0);
  const totalEntries = types.reduce((total, type) => total + type.entries.length, 0);

  return [
    "HASIL PENIMBANGAN MANGGA",
    ...sections,
    ["RINGKASAN", `Total Keseluruhan: ${formatKg(totalWeight)}`, `Jumlah Keseluruhan: ${totalEntries}`].join("\n"),
  ].join("\n\n");
}
