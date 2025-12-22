import React, { useState } from "react";
import {
  
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { OpenAuth } from "@openauth/sdk";
import { styles } from "../styles";

type Props = {
  appSecret: string;
  externalUserId: string;
  onContinue: () => void;
};

export function EmailSetupScreen({
  appSecret,
  externalUserId,
  onContinue,
}: Props) {
  const [email, setEmail] = useState("");

  const submit = async () => {
    try {
      await OpenAuth.setupEmail(
        externalUserId,
        email,
        appSecret
      );
      onContinue();
    } catch (e: any) {
      Alert.alert("Error", e.message || "Failed to send email OTP");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Add your email</Text>

      <TextInput
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <TouchableOpacity style={styles.primaryButton} onPress={submit}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
