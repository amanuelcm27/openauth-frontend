import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { OpenAuth } from "@openauth/sdk";
import { styles } from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  appSecret: string;
  externalUserId: string;
  onVerified: () => void;
};

export function EmailVerifyScreen({
  appSecret,
  externalUserId,
  onVerified,
}: Props) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const [timer, setTimer] = useState(0); // start at 0
  const [sending, setSending] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const sendOTP = async () => {
    try {
      setSending(true);
      await OpenAuth.sendEmailOTP(externalUserId, appSecret);
      Alert.alert("OTP sent", "Check your email for the verification code.");
      setCode(["", "", "", "", "", ""]); // reset inputs
      setTimer(300); // start 5 minutes countdown
    } catch (e: any) {
      Alert.alert("Error", e.message || "Failed to send OTP");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (text: string, i: number) => {
    const next = [...code];
    next[i] = text;
    setCode(next);

    if (text && i < inputs.current.length - 1) {
      inputs.current[i + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    i: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };

  const verify = async () => {
    try {
      await OpenAuth.verifyEmailOTP(externalUserId, code.join(""), appSecret);
      onVerified();
    } catch (e: any) {
      Alert.alert("Error", e.message || "Invalid code");
    }
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Check your email</Text>
      <View style={styles.codeInputContainer}>
        {code.map((d, i) => (
          <TextInput
            key={i}
            ref={(ref) => {
              inputs.current[i] = ref;
            }}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            value={d}
            onChangeText={(t) => handleChange(t, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
          />
        ))}
      </View>

      {timer > 0 && (
        <Text style={{ textAlign: "center", marginVertical: 10 }}>
          Expires in: {formatTime(timer)}
        </Text>
      )}

      <TouchableOpacity
        style={[styles.secondaryButton, sending && { opacity: 0.6 }]}
        onPress={sendOTP}
        disabled={sending || timer > 0}
      >
        <Text style={styles.secondaryButtonText}>Send OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton} onPress={verify}>
        <Text style={styles.primaryButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
