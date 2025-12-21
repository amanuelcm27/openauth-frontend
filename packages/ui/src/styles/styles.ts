import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  methodCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  recommendedCard: {
    borderWidth: 2,
    borderColor: "#0066ff",
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  methodText: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  recommendedBadge: {
    fontSize: 14,
    color: "#0066ff",
    marginTop: 4,
  },
  qrContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  qrImage: {
    width: 200,
    height: 200,
  },
  manualCodeContainer: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "column", 
    paddingHorizontal: 20,
  },

  manualCode: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    width: "100%",
  },

  copyText: {
    color: "#0066ff",
    fontWeight: "600",
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 40,
  },
  codeInput: {
    width: 40,
    height: 56,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginHorizontal: 6,
    fontSize: 24,
    fontWeight: "bold",
  },
  helperText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#0066ff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "600",
  },
  successContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  successCheck: {
    width: 100,
    height: 100,
    backgroundColor: "#4caf50",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  checkmark: {
    fontSize: 60,
    color: "#fff",
    fontWeight: "bold",
  },
  successTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  successSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  envelopeIcon: {
    width: 160,
    height: 160,
  },
  emailInput: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 18,
    fontSize: 18,
    marginBottom: 12,
  },
  errorText: {
    color: "#ff4444",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
});
