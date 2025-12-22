import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OpenAuth } from "@openauthdev/sdk";
import { styles } from "../styles";

type Props = {
  appSecret: string;
  externalUserId: string;
  onContinue: () => void;
};

export function TotpSetupScreen({
  appSecret,
  externalUserId,
  onContinue,
}: Props) {
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setupTOTP() {
      try {
        const res = await OpenAuth.setupTOTP(
          externalUserId,
          appSecret
        );

        // Server-generated QR image
        setQrImage(
          `data:image/png;base64,${res.qr_code_base64}`
        );

        // Manual entry secret
        setSecretKey(res.secret_key);
      } catch (e: any) {
        Alert.alert(
          "Error",
          e?.message || "Failed to set up authenticator"
        );
      } finally {
        setLoading(false);
      }
    }

    setupTOTP();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Set up authenticator</Text>

      <Text style={styles.subtitle}>
        Scan the QR code using an authenticator app like Google Authenticator
        or Authy.
      </Text>

      {qrImage && (
        <View style={styles.qrContainer}>
          <Image
            source={{ uri: qrImage }}
            style={styles.qrImage}
            resizeMode="contain"
          />
        </View>
      )}

      {secretKey && (
        <View style={styles.manualCodeContainer}>
          <Text style={styles.subtitle}>
            Or enter this key manually:
          </Text>
          <Text style={styles.manualCode} selectable>{secretKey}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={onContinue}
        disabled={loading}
      >
        <Text style={styles.primaryButtonText}> 
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
