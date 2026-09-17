import Feather from "@expo/vector-icons/Feather";
import { Pressable, View } from "react-native";

import { colors } from "../constants/colors";
import { styles } from "../styles/home";
import { Text } from "./Typography";
import type { MangoEntry, MangoType } from "../types/mango";
import { formatKg } from "../utils/format";
import { getNetWeight, getTotalWeight } from "../utils/mango";

type MangoTypeCardProps = {
  type: MangoType;
  crateWeight: number;
  onEditWeight: (typeId: string, entryId: string) => void;
  onDeleteWeight: (typeId: string, entry: MangoEntry) => void;
  onDeleteType: (typeId: string) => void;
};

export function MangoTypeCard({ type, crateWeight, onEditWeight, onDeleteWeight, onDeleteType }: MangoTypeCardProps) {
  const total = getTotalWeight(type.entries);
  const net = getNetWeight(total, type.entries.length, crateWeight);

  return (
    <View style={styles.typeCard}>
      <View style={styles.typeHeader}>
        <View style={styles.typeTitleContainer}>
          <Text style={styles.typeTitle}>{type.name}</Text>

          <Text style={styles.typeSubtitle}>{type.entries.length} pencatatan</Text>
        </View>

        <Pressable
          accessibilityLabel={`Hapus jenis ${type.name}`}
          accessibilityRole="button"
          style={({ pressed }) => [styles.deleteTypeButton, pressed && styles.buttonPressed]}
          onPress={() => onDeleteType(type.id)}
        >
          <Feather name="x" size={18} color={colors.danger} />
        </Pressable>
      </View>

      <View style={styles.items}>
        {type.entries.length === 0 ? (
          <Text style={styles.emptyText}>Belum ada data berat.</Text>
        ) : (
          type.entries.map((entry, index) => (
            <View key={entry.id} style={[styles.weightRow, index === type.entries.length - 1 && styles.weightRowLast]}>
              <Text style={styles.number}>{String(index + 1).padStart(2, "0")}</Text>

              <Text style={styles.weight}>{formatKg(entry.weight)}</Text>

              <View style={styles.itemActions}>
                <Pressable style={({ pressed }) => [styles.editButton, pressed && styles.buttonPressed]} onPress={() => onEditWeight(type.id, entry.id)}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </Pressable>

                <Pressable style={({ pressed }) => [styles.deleteButton, pressed && styles.buttonPressed]} onPress={() => onDeleteWeight(type.id, entry)}>
                  <Text style={styles.deleteButtonText}>Hapus</Text>
                </Pressable>
              </View>
            </View>
          ))
        )}
      </View>

      <View style={styles.totalDivider} />

      <View style={styles.totalRow}>
        <View>
          <Text style={styles.totalLabel}>TOTAL</Text>

          <Text style={styles.totalValue}>{formatKg(total)}</Text>
        </View>

        <View style={styles.totalRight}>
          <Text style={styles.totalLabel}>DIKURANGI PETI</Text>

          <Text style={styles.totalValue}>{formatKg(net)}</Text>
        </View>
      </View>
    </View>
  );
}
