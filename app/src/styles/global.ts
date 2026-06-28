import { StyleSheet } from 'react-native';

export const colors = {
  background: '#edf3f5',
  box: '#d6c4b4',

  text: '#283236',
  textSecondary: '#5f6673',
  muted: '#8d949c',

  border: '#cfd8dc',
  primary: '#8f7a66',
  alert: '#d96b6b',
  white: '#ffffff',
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 10,
  md: 18,
  lg: 26,
  pill: 999,
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },

  scrollContent: {
    paddingBottom: 120,
  },

  homeContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: spacing.lg,
    paddingBottom: 120,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 42,
    marginBottom: spacing.xs,
  },

  heroQuote: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: spacing.sm,
  },

  dateText: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },

  infoBox: {
    backgroundColor: colors.box,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  infoTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },

  infoDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },

  promptText: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.sm,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text,
    minHeight: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },

  moodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
  },

  moodButton: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  moodButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  moodText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },

  moodTextActive: {
    color: colors.white,
  },

  imageUploadBox: {
    height: 150,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginBottom: spacing.md,
  },

  imageUploadText: {
    color: colors.textSecondary,
    fontSize: 15,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: spacing.md,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },

  journalItem: {
    backgroundColor: colors.box,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },

  journalDate: {
    color: colors.muted,
    marginBottom: spacing.xs,
    fontSize: 13,
  },

  journalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },

  journalText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
  },

  empty: {
    textAlign: 'center',
    color: colors.muted,
    marginTop: spacing.xl,
    fontStyle: 'italic',
  },

  tabBar: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    height: 85,
    paddingTop: 8,
    paddingBottom: 20,
  },
  authInput: {
  backgroundColor: colors.white,
  borderRadius: radius.md,
  padding: spacing.md,
  fontSize: 16,
  color: colors.text,
  borderWidth: 1,
  borderColor: colors.border,
  marginBottom: spacing.md,
},

authContainer: {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: spacing.lg,
  backgroundColor: colors.background,
},

logoutButton: {
  alignSelf: 'center',
  marginTop: spacing.xl,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.lg,
  borderRadius: radius.pill,
  borderWidth: 1,
  borderColor: colors.border,
  backgroundColor: colors.white,
},

logoutText: {
  color: colors.textSecondary,
  fontSize: 15,
  fontWeight: '600',
},

});