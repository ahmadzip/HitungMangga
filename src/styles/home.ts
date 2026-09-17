import { StyleSheet } from "react-native";

import { colors } from "../constants/colors";
import { radius } from "../constants/radius";
import { spacing } from "../constants/spacing";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  loadingText: {
    marginTop: 10,

    fontSize: 13,
    color: colors.textMuted,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 6,
  },

  headerSmall: {
    fontSize: 12,
    color: colors.textMuted,
  },

  title: {
    marginTop: 2,
    fontSize: 30,
    fontWeight: "700",
    color: colors.text,
  },

  settingsButton: {
    width: 44,
    height: 44,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: colors.border,

    backgroundColor: colors.surface,

    alignItems: "center",
    justifyContent: "center",
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [
      {
        scale: 0.97,
      },
    ],
  },

  summary: {
    marginTop: 22,
    padding: spacing.xl,

    borderRadius: 23,

    backgroundColor: colors.primary,

    elevation: 5,

    shadowColor: colors.primary,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.16,
    shadowRadius: 16,
  },

  summaryLabel: {
    fontSize: 13,

    color: "rgba(255,255,255,0.65)",

    letterSpacing: 0.5,
  },

  summaryNumber: {
    marginTop: spacing.xs,

    fontSize: 42,
    fontWeight: "700",

    color: colors.white,
  },

  summaryDivider: {
    marginTop: 17,
    marginBottom: 14,

    height: 1,

    backgroundColor: "rgba(255,255,255,0.14)",
  },

  summaryBottom: {
    flexDirection: "row",
  },

  summaryItem: {
    flex: 1,
  },

  summaryItemCenter: {
    alignItems: "center",
  },

  summaryItemRight: {
    alignItems: "flex-end",
  },

  summaryItemLabel: {
    fontSize: 11,

    color: "rgba(255,255,255,0.60)",
  },

  summaryItemValue: {
    marginTop: spacing.xs,

    fontSize: 15,
    fontWeight: "700",

    color: colors.white,
  },

  quickActions: {
    marginTop: spacing.md,
    marginBottom: 22,

    flexDirection: "row",
    gap: 9,
  },

  addMangoButton: {
    flex: 1,

    paddingHorizontal: spacing.sm,
    paddingVertical: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,

    borderRadius: radius.lg,

    backgroundColor: colors.accent,
  },

  addMangoText: {
    flexShrink: 1,
    textAlign: "center",
    fontWeight: "800",
    color: colors.accentText,
  },

  addTypeButton: {
    flex: 1,

    paddingHorizontal: spacing.sm,
    paddingVertical: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,

    borderRadius: radius.lg,

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,
  },

  addTypeText: {
    flexShrink: 1,
    textAlign: "center",
    fontWeight: "800",
    color: colors.text,
  },

  sectionTitle: {
    marginBottom: 11,

    fontSize: 21,
    fontWeight: "700",

    color: colors.text,
  },

  shareButton: {
    minHeight: 48,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: 13,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,

    borderRadius: radius.lg,

    backgroundColor: colors.success,
  },

  shareButtonText: {
    flexShrink: 1,
    textAlign: "center",
    fontWeight: "800",
    color: colors.white,
  },

  emptyCard: {
    padding: 25,

    alignItems: "center",

    borderRadius: radius.xl,

    borderWidth: 1,
    borderColor: colors.border,

    backgroundColor: colors.surface,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",

    color: colors.text,
  },

  emptyDescription: {
    marginTop: 5,

    textAlign: "center",

    fontSize: 12,
    lineHeight: 18,

    color: colors.textMuted,
  },

  typeCard: {
    marginBottom: 14,
    padding: 15,

    borderRadius: radius.xl,

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,
  },

  typeHeader: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "flex-start",

    gap: spacing.sm,
  },

  typeTitleContainer: {
    flexShrink: 1,
  },

  typeTitle: {
    fontSize: 21,
    fontWeight: "700",

    color: colors.text,
  },

  typeSubtitle: {
    marginTop: 3,

    fontSize: 12,

    color: colors.textMuted,
  },

  deleteTypeButton: {
    width: 31,
    height: 31,

    borderRadius: 9,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.dangerBackground,
  },

  items: {
    marginTop: 13,
  },

  emptyText: {
    paddingVertical: spacing.lg,

    textAlign: "center",

    fontSize: 12,

    color: colors.textSubtle,
  },

  weightRow: {
    paddingVertical: 11,

    flexDirection: "row",

    alignItems: "center",

    borderBottomWidth: 1,

    borderBottomColor: "#e7e1d6",
  },

  weightRowLast: {
    borderBottomWidth: 0,
  },

  number: {
    width: 30,

    fontSize: 12,

    color: "#9a9387",
  },

  weight: {
    flex: 1,

    fontSize: 15,
    fontWeight: "700",

    color: colors.text,
  },

  itemActions: {
    flexDirection: "row",
    gap: 5,
  },

  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 7,

    borderRadius: radius.sm,

    backgroundColor: colors.control,
  },

  editButtonText: {
    fontSize: 11,
    fontWeight: "700",

    color: "#59554c",
  },

  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 7,

    borderRadius: radius.sm,

    backgroundColor: colors.dangerBackground,
  },

  deleteButtonText: {
    fontSize: 11,
    fontWeight: "700",

    color: colors.danger,
  },

  totalDivider: {
    marginTop: spacing.md,

    height: 1,

    backgroundColor: "#ddd8cf",
  },

  totalRow: {
    paddingTop: spacing.md,

    flexDirection: "row",

    justifyContent: "space-between",
  },

  totalRight: {
    alignItems: "flex-end",
  },

  totalLabel: {
    fontSize: 10,

    color: "#918a7f",
  },

  totalValue: {
    marginTop: 2,

    fontSize: 15,
    fontWeight: "700",

    color: colors.text,
  },

  modalOverlay: {
    flex: 1,

    justifyContent: "flex-end",

    backgroundColor: colors.overlay,
  },

  modalBackdrop: {
    ...StyleSheet.absoluteFill,
  },

  modalBox: {
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
    marginTop: spacing.xs,
    marginBottom: spacing.sm,

    fontSize: 12,
    fontWeight: "700",

    color: colors.formLabel,
  },

  typeSelector: {
    flexDirection: "row",
    flexWrap: "wrap",

    gap: spacing.sm,

    marginBottom: spacing.lg,
  },

  typeOption: {
    minWidth: 88,

    paddingHorizontal: 20,
    paddingVertical: 14,

    alignItems: "center",

    borderRadius: 12,

    borderWidth: 1,
    borderColor: colors.inputBorder,

    backgroundColor: colors.white,
  },

  typeOptionActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  typeOptionPressed: {
    opacity: 0.75,

    transform: [
      {
        scale: 0.96,
      },
    ],
  },

  typeOptionText: {
    fontSize: 16,
    fontWeight: "800",

    color: "#625d54",
  },

  typeOptionTextActive: {
    color: colors.white,
  },

  input: {
    height: 54,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: colors.inputBorder,

    borderRadius: radius.md,

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
    flexDirection: "row",

    gap: spacing.sm,

    marginTop: 22,
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

  keyboardAvoid: {
    flex: 1,
  },
});
