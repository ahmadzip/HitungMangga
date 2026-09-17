import { View } from "react-native";

import { styles } from "../styles/home";
import { Text } from "./Typography";
import { formatKg } from "../utils/format";

type MangoSummaryProps = {
  totalWeight: number;
  netWeight: number;
  totalCrates: number;
  crateWeight: number;
};

export function MangoSummary({ totalWeight, netWeight, totalCrates, crateWeight }: MangoSummaryProps) {
  return (
    <View style={styles.summary}>
      <Text style={styles.summaryLabel}>TOTAL BERAT KESELURUHAN</Text>
      <Text style={styles.summaryNumber}>{formatKg(totalWeight)}</Text>
      <View style={styles.summaryDivider} />
      <View style={styles.summaryBottom}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryItemLabel}>BERAT BERSIH</Text>
          <Text style={styles.summaryItemValue}>{formatKg(netWeight)}</Text>
        </View>
        <View style={[styles.summaryItem, styles.summaryItemCenter]}>
          <Text style={styles.summaryItemLabel}>JUMLAH PETI</Text>
          <Text style={styles.summaryItemValue}>{totalCrates}</Text>
        </View>
        <View style={[styles.summaryItem, styles.summaryItemRight]}>
          <Text style={styles.summaryItemLabel}>BERAT / PETI</Text>
          <Text style={styles.summaryItemValue}>{formatKg(crateWeight)}</Text>
        </View>
      </View>
    </View>
  );
}
