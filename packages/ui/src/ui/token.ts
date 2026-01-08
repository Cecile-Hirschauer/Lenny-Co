export const colors = {
  primary: "#3B82F6", // Blue
  secondary: "#FF9500", // Orange
  success: "#1ABFB4", // Teal
  error: "#E11D48", // Soft Red
  neutralDark: "#1E293B", // Texte Principal
  neutralMid: "#64748B", // Texte Secondaire
  bgPaper: "#F8FAFC", // Fond Écran
  surface: "#FFFFFF", // Fond Cartes
} as const;

export const typography = {
  headingXL: {
    fontSize: 32,
    fontWeight: "700" as const, // Bold
    lineHeight: 32 * 1.3, // 130% (~41.6px)
  },
  headingLG: {
    fontSize: 24,
    fontWeight: "700" as const,
    lineHeight: 24 * 1.35, // 135% (~32.4px)
  },
  headingMD: {
    fontSize: 20,
    fontWeight: "600" as const, // SemiBold
    lineHeight: 20 * 1.4, // 140% (28px)
  },
  bodyLG: {
    fontSize: 18,
    fontWeight: "400" as const, // Regular
    lineHeight: 18 * 1.7, // 170% (~30.6px) - Très aéré pour la lecture
  },
  bodyMD: {
    fontSize: 16,
    fontWeight: "500" as const, // Medium
    lineHeight: 16 * 1.5, // 150% (24px)
  },
  button: {
    fontSize: 18,
    fontWeight: "700" as const, // Bold
    lineHeight: 18 * 1, // 100% (18px)
  },
  caption: {
    fontSize: 12,
    fontWeight: "400" as const, // Regular
    lineHeight: 12 * 1.4, // 140% (16.8px)
  },
};
