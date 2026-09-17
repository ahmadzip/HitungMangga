import { useRef } from "react";

import { KeyboardAvoidingView, Modal, Platform, Pressable, type TextInput as NativeTextInput, View } from "react-native";

import { colors } from "../constants/colors";
import { Text, TextInput } from "./Typography";
import { styles } from "../styles/home";
import type { MangoType } from "../types/mango";

type WeightModalProps = {
  visible: boolean;
  isEditing: boolean;
  types: MangoType[];
  selectedTypeId: string;
  weightInput: string;
  weightError: string;
  onSelectType: (typeId: string) => void;
  onChangeWeight: (value: string) => void;
  onClose: () => void;
  onSave: () => void;
};

export function WeightModal({
  visible,
  isEditing,
  types,
  selectedTypeId,
  weightInput,
  weightError,
  onSelectType,
  onChangeWeight,
  onClose,
  onSave,
}: WeightModalProps) {
  const inputRef = useRef<NativeTextInput>(null);

  function focusWeightInput() {
    inputRef.current?.blur();
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onShow={focusWeightInput}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <View style={styles.modalOverlay}>
          <Pressable style={styles.modalBackdrop} onPress={onClose} />
          <View style={styles.modalBox}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>{isEditing ? "Edit Berat" : "Tambah Mangga"}</Text>
            <Text style={styles.modalDescription}>Pilih jenis mangga lalu masukkan hasil timbangan.</Text>
            <Text style={styles.formLabel}>Jenis Mangga</Text>
            <View style={styles.typeSelector}>
              {types.map((type) => {
                const active = selectedTypeId === type.id;

                return (
                  <Pressable key={type.id} onPress={() => onSelectType(type.id)} style={({ pressed }) => [styles.typeOption, active && styles.typeOptionActive, pressed && styles.typeOptionPressed]}>
                    <Text style={[styles.typeOptionText, active && styles.typeOptionTextActive]}>{type.name}</Text>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.formLabel}>Berat (kg)</Text>

            <TextInput
              ref={inputRef}
              value={weightInput}
              onChangeText={onChangeWeight}
              placeholder="Contoh: 42.5"
              placeholderTextColor={colors.textSubtle}
              keyboardType="decimal-pad"
              style={[styles.input, weightError ? styles.inputError : null]}
              onSubmitEditing={onSave}
            />

            {weightError ? <Text style={styles.errorText}>{weightError}</Text> : null}

            <View style={styles.modalActions}>
              <Pressable style={[styles.modalButton, styles.cancelButton]} onPress={onClose}>
                <Text style={styles.cancelButtonText}>Batal</Text>
              </Pressable>

              <Pressable style={[styles.modalButton, styles.saveButton]} onPress={onSave}>
                <Text style={styles.saveButtonText}>Simpan</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
