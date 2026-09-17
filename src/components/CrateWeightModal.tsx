import { useRef } from "react";

import { KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, type TextInput as NativeTextInput, View } from "react-native";

import { colors } from "../constants/colors";
import { Text, TextInput } from "./Typography";
import { styles } from "../styles/settings";

type CrateWeightModalProps = {
  visible: boolean;
  crateInput: string;
  crateError: string;
  onChangeCrate: (value: string) => void;
  onClose: () => void;
  onSave: () => void;
};

export function CrateWeightModal({ visible, crateInput, crateError, onChangeCrate, onClose, onSave }: CrateWeightModalProps) {
  const inputRef = useRef<NativeTextInput>(null);

  function focusCrateInput() {
    inputRef.current?.blur();
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent onShow={focusCrateInput} onRequestClose={onClose}>
      <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <View style={styles.modalOverlay}>
          <Pressable style={styles.modalBackdrop} onPress={onClose} />

          <View style={styles.modalBox}>
            <View style={styles.modalHandle} />

            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} bounces={false}>
              <Text style={styles.modalTitle}>Berat Peti</Text>

              <Text style={styles.modalDescription}>Tentukan berat kosong satu peti.</Text>

              <Text style={styles.formLabel}>Berat Peti (kg)</Text>

              <TextInput
                ref={inputRef}
                value={crateInput}
                onChangeText={onChangeCrate}
                placeholder="Contoh: 5"
                placeholderTextColor={colors.textSubtle}
                keyboardType="decimal-pad"
                returnKeyType="done"
                style={[styles.input, crateError ? styles.inputError : null]}
                onSubmitEditing={onSave}
              />

              {crateError ? <Text style={styles.errorText}>{crateError}</Text> : null}

              <View style={styles.modalActions}>
                <Pressable style={({ pressed }) => [styles.modalButton, styles.cancelButton, pressed && styles.pressed]} onPress={onClose}>
                  <Text style={styles.cancelButtonText}>Batal</Text>
                </Pressable>

                <Pressable style={({ pressed }) => [styles.modalButton, styles.saveButton, pressed && styles.pressed]} onPress={onSave}>
                  <Text style={styles.saveButtonText}>Simpan</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
