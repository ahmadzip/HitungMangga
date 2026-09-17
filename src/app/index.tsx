import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useState } from "react";

import { ActivityIndicator, Alert, Pressable, ScrollView, StatusBar, View } from "react-native";

import { MangoSummary } from "../components/MangoSummary";
import { Text } from "../components/Typography";
import { MangoTypeCard } from "../components/MangoTypeCard";
import { TypeModal } from "../components/TypeModal";
import { WeightModal } from "../components/WeightModal";
import { useMango } from "../store/MangoContext";
import { styles } from "../styles/home";
import type { MangoEntry } from "../types/mango";
import { formatKg } from "../utils/format";
import { getNetWeight, getTotalWeight } from "../utils/mango";
import { buildShareMessage } from "../utils/share";
import { isDuplicateTypeName, normalizeTypeName, parsePositiveNumber } from "../utils/validation";

type EditingWeight = {
  typeId: string;
  entryId: string;
} | null;

export default function HomeScreen() {
  const router = useRouter();
  const { data, loaded, addType, deleteType, addWeight, updateWeight, deleteWeight } = useMango();
  const { types, crateWeight } = data;

  // WEIGHT MODAL

  const [showWeightModal, setShowWeightModal] = useState(false);
  const [selectedTypeId, setSelectedTypeId] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [weightError, setWeightError] = useState("");
  const [editingWeight, setEditingWeight] = useState<EditingWeight>(null);

  // TYPE MODAL

  const [showTypeModal, setShowTypeModal] = useState(false);
  const [typeInput, setTypeInput] = useState("");
  const [typeError, setTypeError] = useState("");

  const totalWeight = types.reduce(
    (total, type) => total + getTotalWeight(type.entries),

    0,
  );

  const totalCrates = types.reduce(
    (total, type) => total + type.entries.length,

    0,
  );

  const netWeight = getNetWeight(totalWeight, totalCrates, crateWeight);

  // ADD WEIGHT

  function openWeightModal() {
    if (types.length === 0) {
      Alert.alert("Belum Ada Jenis", "Tambahkan jenis mangga terlebih dahulu.", [
        {
          text: "Batal",
          style: "cancel",
        },

        {
          text: "Tambah Jenis",

          onPress: openTypeModal,
        },
      ]);

      return;
    }

    setEditingWeight(null);

    setSelectedTypeId("");

    setWeightInput("");
    setWeightError("");

    setShowWeightModal(true);
  }

  // EDIT WEIGHT

  function openEditWeightModal(typeId: string, entryId: string) {
    const type = types.find((item) => item.id === typeId);

    const entry = type?.entries.find((item) => item.id === entryId);

    if (!type || !entry) {
      return;
    }

    setEditingWeight({
      typeId,
      entryId,
    });

    setSelectedTypeId(typeId);

    setWeightInput(String(entry.weight));

    setWeightError("");

    setShowWeightModal(true);
  }

  function closeWeightModal() {
    setShowWeightModal(false);

    setEditingWeight(null);
    setSelectedTypeId("");
    setWeightInput("");
    setWeightError("");
  }

  // SAVE WEIGHT

  function handleSaveWeight() {
    if (!selectedTypeId) {
      setWeightError("Pilih jenis mangga.");

      return;
    }

    const weight = parsePositiveNumber(weightInput);

    if (weight === null) {
      setWeightError("Masukkan berat yang valid.");

      return;
    }

    if (editingWeight) {
      updateWeight(editingWeight.typeId, editingWeight.entryId, selectedTypeId, weight);
    } else {
      addWeight(selectedTypeId, weight);
    }

    closeWeightModal();
  }

  // DELETE WEIGHT

  function handleDeleteWeight(typeId: string, entry: MangoEntry) {
    const type = types.find((item) => item.id === typeId);

    if (!type) {
      return;
    }

    Alert.alert("Hapus Data?", `Hapus ${formatKg(entry.weight)} dari ${type.name}?`, [
      {
        text: "Batal",
        style: "cancel",
      },

      {
        text: "Hapus",
        style: "destructive",

        onPress: () => deleteWeight(typeId, entry.id),
      },
    ]);
  }

  // ADD TYPE

  function openTypeModal() {
    setTypeInput("");
    setTypeError("");

    setShowTypeModal(true);
  }

  function closeTypeModal() {
    setShowTypeModal(false);

    setTypeInput("");
    setTypeError("");
  }

  function handleSaveType() {
    const name = normalizeTypeName(typeInput);

    if (!name) {
      setTypeError("Nama jenis tidak boleh kosong.");

      return;
    }

    if (isDuplicateTypeName(types, name)) {
      setTypeError("Jenis tersebut sudah ada.");

      return;
    }

    addType(name);

    closeTypeModal();
  }

  // DELETE TYPE

  function handleDeleteType(typeId: string) {
    const type = types.find((item) => item.id === typeId);

    if (!type) {
      return;
    }

    const message = type.entries.length > 0 ? `${type.name} memiliki ${type.entries.length} pencatatan. Semua data di dalamnya juga akan dihapus.` : `Hapus jenis ${type.name}?`;

    Alert.alert("Hapus Jenis?", message, [
      {
        text: "Batal",
        style: "cancel",
      },

      {
        text: "Hapus",
        style: "destructive",

        onPress: () => deleteType(type.id),
      },
    ]);
  }

  async function handleShare() {
    if (totalCrates === 0) {
      Alert.alert("Belum Ada Data", "Tambahkan pencatatan berat sebelum membagikan hasil.");
      return;
    }

    const url = `https://wa.me/?text=${encodeURIComponent(buildShareMessage(data))}`;

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert("Gagal Membuka WhatsApp", "Pastikan WhatsApp tersedia, lalu coba lagi.");
    }
  }

  // LOADING

  if (!loaded) {
    return (
      <>
        <ActivityIndicator size="large" color="#25362b" />
        <Text style={styles.loadingText}>Memuat data...</Text>
      </>
    );
  }

  // UI

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f4ee" />

      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollContent}>
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>HitungMangga</Text>
          </View>

          <Pressable
            accessibilityLabel="Buka pengaturan"
            accessibilityRole="button"
            style={({ pressed }) => [styles.settingsButton, pressed && styles.buttonPressed]}
            onPress={() => router.push("/settings")}
          >
            <Feather name="settings" size={20} color="#292b24" />
          </Pressable>
        </View>

        {/* SUMMARY */}

        <MangoSummary totalWeight={totalWeight} netWeight={netWeight} totalCrates={totalCrates} crateWeight={crateWeight} />

        {/* ACTIONS */}

        <View style={styles.quickActions}>
          <Pressable style={({ pressed }) => [styles.addTypeButton, pressed && styles.buttonPressed]} onPress={openTypeModal}>
            <Feather name="plus" size={18} color="#292b24" accessibilityElementsHidden />
            <Text style={styles.addTypeText}>Jenis Baru</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.addMangoButton, pressed && styles.buttonPressed]} onPress={openWeightModal}>
            <Feather name="plus" size={18} color="#302816" accessibilityElementsHidden />
            <Text style={styles.addMangoText}>Tambah Mangga</Text>
          </Pressable>
        </View>

        {/* TITLE */}

        <Text style={styles.sectionTitle}>Jenis Mangga</Text>

        {/* EMPTY */}

        {types.length === 0 && (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Belum ada jenis mangga</Text>
            <Text style={styles.emptyDescription}>Tekan Jenis Baru untuk menambahkan jenis mangga.</Text>
          </View>
        )}

        {/* TYPES */}

        {types.map((type) => (
          <MangoTypeCard key={type.id} type={type} crateWeight={crateWeight} onEditWeight={openEditWeightModal} onDeleteWeight={handleDeleteWeight} onDeleteType={handleDeleteType} />
        ))}

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.shareButton, pressed && styles.buttonPressed]}
          onPress={handleShare}
        >
          <FontAwesome name="whatsapp" size={22} color="#ffffff" />
          <Text style={styles.shareButtonText}>Bagikan ke WhatsApp</Text>
        </Pressable>

        <View
          style={{
            height: 30,
          }}
        />
      </ScrollView>

      <WeightModal
        visible={showWeightModal}
        isEditing={editingWeight !== null}
        types={types}
        selectedTypeId={selectedTypeId}
        weightInput={weightInput}
        weightError={weightError}
        onSelectType={(typeId) => {
          setSelectedTypeId(typeId);
          setWeightError("");
        }}
        onChangeWeight={(value) => {
          setWeightInput(value);
          setWeightError("");
        }}
        onClose={closeWeightModal}
        onSave={handleSaveWeight}
      />

      <TypeModal
        visible={showTypeModal}
        typeInput={typeInput}
        typeError={typeError}
        onChangeType={(value) => {
          setTypeInput(value.toUpperCase());
          setTypeError("");
        }}
        onClose={closeTypeModal}
        onSave={handleSaveType}
      />
    </>
  );
}
