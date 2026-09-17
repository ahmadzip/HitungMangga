import type { MangoData } from "../src/types/mango";
import { buildShareMessage } from "../src/utils/share";

function assertIncludes(value: string, expected: string, message: string) {
  if (!value.includes(expected)) {
    throw new Error(message);
  }
}

const data: MangoData = {
  crateWeight: 5,
  types: [
    {
      id: "dr1",
      name: "DR 1",
      entries: [
        { id: "entry-1", weight: 42.5 },
        { id: "entry-2", weight: 37 },
      ],
    },
    {
      id: "dr2",
      name: "DR 2",
      entries: [{ id: "entry-3", weight: 50 }],
    },
  ],
};

const message = buildShareMessage(data);

assertIncludes(message, "DR 1\n1. 42.5 kg\n2. 37 kg", "Semua entri DR 1 harus dicantumkan");
assertIncludes(message, "Total: 79.5 kg\nJumlah: 2", "Subtotal DR 1 harus benar");
assertIncludes(message, "DR 2\n1. 50 kg", "Semua jenis harus dicantumkan");
assertIncludes(message, "Total Keseluruhan: 129.5 kg\nJumlah Keseluruhan: 3", "Ringkasan keseluruhan harus benar");
