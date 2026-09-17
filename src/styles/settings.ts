import { StyleSheet } from "react-native";

import { colors } from "../constants/colors";
import { radius } from "../constants/radius";
import { spacing } from "../constants/spacing";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // HEADER

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: 10,
    paddingBottom: 14,

    flexDirection: "row",
    alignItems: "center",

    gap: 13,

    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  backButton: {
    width: 42,
    height: 42,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: radius.md,

    borderWidth: 1,
    borderColor: colors.border,

    backgroundColor: colors.surface,
  },

  pressed: {
    opacity: 0.7,

    transform: [
      {
        scale: 0.97,
      },
    ],
  },

  title: {
    fontSize: 25,
    fontWeight: "700",

    color: colors.text,
  },

  subtitle: {
    marginTop: 2,

    fontSize: 12,

    color: colors.textMuted,
  },

  // CONTENT

  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: 40,
  },

  sectionTitle: {
    marginLeft: 3,
    marginBottom: 9,

    fontSize: 11,
    fontWeight: "800",

    letterSpacing: 0.5,

    color: "#958e83",
  },

  settingCard: {
    marginBottom: spacing.xl,

    overflow: "hidden",

    borderRadius: 18,

    borderWidth: 1,
    borderColor: colors.border,

    backgroundColor: colors.surface,
  },

  fontSizeRow: {
    padding: 17,
    gap: spacing.md,
  },

  fontSizeOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },

  fontSizeOption: {
    flexGrow: 1,
    minWidth: 76,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.control,
  },

  fontSizeOptionActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },

  fontSizeOptionText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.controlText,
  },

  fontSizeOptionTextActive: {
    color: colors.white,
  },

  settingRow: {
    padding: 17,

    flexDirection: "row",
    alignItems: "center",

    gap: 14,
  },

  rowPressed: {
    backgroundColor: "#f5f2ec",
  },

  settingIcon: {
    width: 43,
    height: 43,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: radius.md,

    backgroundColor: "#f0eee8",
  },

  dangerIcon: {
    width: 43,
    height: 43,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: radius.md,

    backgroundColor: "#f8e9e6",
  },

  settingInfo: {
    flex: 1,
  },

  settingName: {
    fontSize: 15,
    fontWeight: "700",

    color: colors.text,
  },

  dangerName: {
    fontSize: 15,
    fontWeight: "700",

    color: "#923f35",
  },

  settingDescription: {
    marginTop: 3,

    fontSize: 11,
    lineHeight: 16,

    color: colors.textMuted,
  },

  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  settingValue: {
    fontSize: 14,
    fontWeight: "800",

    color: colors.success,
  },

  aboutRow: {
    padding: 17,

    flexDirection: "row",
    alignItems: "center",

    gap: 14,
  },

  version: {
    fontSize: 14,
    fontWeight: "800",

    color: colors.success,
  },

  localInfo: {
    paddingVertical: 3,

    textAlign: "center",

    fontSize: 11,

    color: colors.textSubtle,
  },

  madeWith: {
    marginTop: spacing.sm,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  madeWithText: {
    fontSize: 11,
    color: colors.textSubtle,
  },

  authorLink: {
    fontWeight: "800",
    color: colors.success,
    textDecorationLine: "underline",
  },

  // KEYBOARD

  keyboardAvoid: {
    flex: 1,
  },

  // MODAL

  modalOverlay: {
    flex: 1,

    justifyContent: "flex-end",

    backgroundColor: colors.overlay,
  },

  modalBackdrop: {
    ...StyleSheet.absoluteFill,
  },

  modalBox: {
    maxHeight: "85%",

    paddingHorizontal: spacing.xl,

    paddingTop: 10,
    paddingBottom: spacing.xxl,

    backgroundColor: colors.surface,

    borderTopLeftRadius: radius.sheet,
    borderTopRightRadius: radius.sheet,
  },

  modalHandle: {
    width: 42,
    height: 5,

    alignSelf: "center",

    marginBottom: spacing.lg,

    borderRadius: radius.full,

    backgroundColor: colors.modalHandle,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "700",

    color: colors.text,
  },

  modalDescription: {
    marginTop: spacing.xs,
    marginBottom: spacing.xl,

    fontSize: 12,
    lineHeight: 18,

    color: colors.textMuted,
  },

  formLabel: {
    marginBottom: spacing.sm,

    fontSize: 12,
    fontWeight: "700",

    color: colors.formLabel,
  },

  input: {
    height: 54,

    paddingHorizontal: 15,

    borderRadius: radius.md,

    borderWidth: 1,
    borderColor: colors.inputBorder,

    backgroundColor: colors.white,

    fontSize: 17,

    color: colors.text,
  },

  inputError: {
    borderColor: colors.danger,
  },

  errorText: {
    marginTop: 7,

    fontSize: 11,

    color: colors.danger,
  },

  modalActions: {
    marginTop: 22,

    flexDirection: "row",

    gap: spacing.sm,
  },

  modalButton: {
    flex: 1,

    paddingVertical: 15,

    alignItems: "center",

    borderRadius: radius.md,
  },

  cancelButton: {
    backgroundColor: colors.control,
  },

  cancelButtonText: {
    fontWeight: "800",

    color: colors.controlText,
  },

  saveButton: {
    backgroundColor: colors.accent,
  },

  saveButtonText: {
    fontWeight: "800",

    color: colors.accentText,
  },
});
