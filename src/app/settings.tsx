import Feather from "@expo/vector-icons/Feather";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useState } from "react";

import { Alert, Pressable, ScrollView, View } from "react-native";

import { CrateWeightModal } from "../components/CrateWeightModal";
import { Text } from "../components/Typography";
import { useFontSize } from "../store/FontSizeContext";
import { useMango } from "../store/MangoContext";
import { styles } from "../styles/settings";
import type { FontSizePreset } from "../utils/fontSize";
import { formatKg } from "../utils/format";
import { parseNonNegativeNumber } from "../utils/validation";

const fontSizeOptions: { label: string; value: FontSizePreset }[] = [
  { label: "Kecil", value: "small" },
  { label: "Normal", value: "normal" },
  { label: "Besar", value: "large" },
];

export default function SettingsScreen() {
  const router = useRouter();

  const { data, setCrateWeight, clearAllData, clearWeightData } = useMango();
  const { fontSizePreset, setFontSizePreset } = useFontSize();

  const [showCrateModal, setShowCrateModal] = useState(false);

  const [crateInput, setCrateInput] = useState("");

  const [crateError, setCrateError] = useState("");

  // BERAT PETI

  function openCrateWeightModal() {
    setCrateInput(String(data.crateWeight));

    setCrateError("");

    setShowCrateModal(true);
  }

  function closeCrateWeightModal() {
    setShowCrateModal(false);

    setCrateError("");
  }

  function handleSaveCrateWeight() {
    const value = parseNonNegativeNumber(crateInput);

    if (value === null) {
      setCrateError("Masukkan berat peti yang valid.");

      return;
    }

    setCrateWeight(value);

    closeCrateWeightModal();
  }

  // HAPUS DATA

  function handleClearAllData() {
    Alert.alert("Hapus Semua Jenis dan Data?", "Semua jenis mangga dan pencatatan berat akan dihapus. Berat peti kembali menjadi 5 kg.", [
      {
        text: "Batal",
        style: "cancel",
      },
      {
        text: "Hapus Semua",
        style: "destructive",
        onPress: clearAllData,
      },
    ]);
  }

  function handleClearWeightData() {
    Alert.alert("Hapus Data Saja?", "Semua pencatatan berat akan dihapus. Jenis mangga dan berat peti tetap tersimpan.", [
      {
        text: "Batal",
        style: "cancel",
      },
      {
        text: "Hapus Data",
        style: "destructive",
        onPress: clearWeightData,
      },
    ]);
  }

  // UI

  return (
    <>
      {/* HEADER */}

      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Kembali"
          accessibilityRole="button"
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
          onPress={() => router.back()}
        >
          <Feather name="chevron-left" size={26} color="#292b24" />
        </Pressable>

        <View>
          <Text style={styles.title}>Pengaturan</Text>

          <Text style={styles.subtitle}>Pengaturan aplikasi</Text>
        </View>
      </View>

      {/* CONTENT */}

      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
        {/* PENIMBANGAN */}

        <Text style={styles.sectionTitle}>PENIMBANGAN</Text>

        <View style={styles.settingCard}>
          <Pressable style={({ pressed }) => [styles.settingRow, pressed && styles.rowPressed]} onPress={openCrateWeightModal}>
            <View style={styles.settingIcon}>
              <Feather name="package" size={20} color="#292b24" accessibilityElementsHidden />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.settingName}>Berat Peti</Text>

              <Text style={styles.settingDescription}>Berat peti akan dikurangi dari setiap pencatatan mangga.</Text>
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.settingValue}>{formatKg(data.crateWeight)}</Text>

              <Feather name="chevron-right" size={20} color="#999287" accessibilityElementsHidden />
            </View>
          </Pressable>
        </View>

        {/* TAMPILAN */}

        <Text style={styles.sectionTitle}>TAMPILAN</Text>

        <View style={styles.settingCard}>
          <View style={styles.fontSizeRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingName}>Ukuran Teks</Text>
              <Text style={styles.settingDescription}>Atur ukuran teks di seluruh aplikasi.</Text>
            </View>

            <View style={styles.fontSizeOptions}>
              {fontSizeOptions.map((option) => {
                const active = fontSizePreset === option.value;

                return (
                  <Pressable
                    key={option.value}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    onPress={() => setFontSizePreset(option.value)}
                    style={({ pressed }) => [styles.fontSizeOption, active && styles.fontSizeOptionActive, pressed && styles.rowPressed]}
                  >
                    <Text style={[styles.fontSizeOptionText, active && styles.fontSizeOptionTextActive]}>{option.label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>

        {/* DATA */}

        <Text style={styles.sectionTitle}>DATA</Text>

        <View style={styles.settingCard}>
          <Pressable style={({ pressed }) => [styles.settingRow, pressed && styles.rowPressed]} onPress={handleClearAllData}>
            <View style={styles.dangerIcon}>
              <Feather name="trash-2" size={20} color="#a7483c" accessibilityElementsHidden />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.dangerName}>Hapus Semua Jenis dan Data</Text>

              <Text style={styles.settingDescription}>Menghapus seluruh jenis dan pencatatan berat.</Text>
            </View>

            <Feather name="chevron-right" size={20} color="#999287" accessibilityElementsHidden />
          </Pressable>

          <Pressable style={({ pressed }) => [styles.settingRow, pressed && styles.rowPressed]} onPress={handleClearWeightData}>
            <View style={styles.dangerIcon}>
              <Feather name="trash-2" size={20} color="#a7483c" accessibilityElementsHidden />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.dangerName}>Hapus Data Saja</Text>

              <Text style={styles.settingDescription}>Menghapus pencatatan berat tanpa menghapus jenis.</Text>
            </View>

            <Feather name="chevron-right" size={20} color="#999287" accessibilityElementsHidden />
          </Pressable>
        </View>

        {/* TENTANG */}

        <Text style={styles.sectionTitle}>TENTANG</Text>

        <View style={styles.settingCard}>
          <View style={styles.aboutRow}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingName}>Mangga</Text>

              <Text style={styles.settingDescription}>Aplikasi pencatatan berat hasil panen.</Text>
            </View>

            <Text style={styles.version}>v1.0</Text>
          </View>
        </View>

        <Text style={styles.localInfo}>Data tersimpan secara lokal di perangkat.</Text>

        <View style={styles.madeWith}>
          <Text style={styles.madeWithText}>Made With</Text>
          <Feather name="heart" size={13} color="#b14141" accessibilityElementsHidden />
          <Text style={styles.madeWithText}>by</Text>
          <Text style={styles.authorLink} onPress={() => Linking.openURL("https://github.com/ahmadzip")}>
            manzip
          </Text>
        </View>
      </ScrollView>

      <CrateWeightModal
        visible={showCrateModal}
        crateInput={crateInput}
        crateError={crateError}
        onChangeCrate={(value) => {
          setCrateInput(value);
          setCrateError("");
        }}
        onClose={closeCrateWeightModal}
        onSave={handleSaveCrateWeight}
      />
    </>
  );
}

