import { useRef } from "react";

import { KeyboardAvoidingView, Modal, Platform, Pressable, type TextInput as NativeTextInput, View } from "react-native";

import { colors } from "../constants/colors";
import { Text, TextInput } from "./Typography";
import { styles } from "../styles/home";

type TypeModalProps = {
  visible: boolean;
  typeInput: string;
  typeError: string;
  onChangeType: (value: string) => void;
  onClose: () => void;
  onSave: () => void;
};

export function TypeModal({ visible, typeInput, typeError, onChangeType, onClose, onSave }: TypeModalProps) {
  const inputRef = useRef<NativeTextInput>(null);

  function focusTypeInput() {
    inputRef.current?.blur();
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent onShow={focusTypeInput} onRequestClose={onClose}>
      <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={0}>
        <View style={styles.modalOverlay}>
          <Pressable style={styles.modalBackdrop} onPress={onClose} />

          <View style={styles.modalBox}>
            <View style={styles.modalHandle} />

            <Text style={styles.modalTitle}>Tambah Jenis</Text>

            <Text style={styles.modalDescription}>Tambahkan jenis mangga baru.</Text>

            <Text style={styles.formLabel}>Nama Jenis</Text>

            <TextInput
              ref={inputRef}
              value={typeInput}
              onChangeText={onChangeType}
              placeholder="Contoh: DR 4"
              placeholderTextColor={colors.textSubtle}
              style={[styles.input, typeError ? styles.inputError : null]}
              onSubmitEditing={onSave}
            />

            {typeError ? <Text style={styles.errorText}>{typeError}</Text> : null}

            <View style={styles.modalActions}>
              <Pressable style={[styles.modalButton, styles.cancelButton]} onPress={onClose}>
                <Text style={styles.cancelButtonText}>Batal</Text>
              </Pressable>

              <Pressable style={[styles.modalButton, styles.saveButton]} onPress={onSave}>
                <Text style={styles.saveButtonText}>Tambah</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
