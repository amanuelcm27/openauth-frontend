import React from "react";
import {

  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles";
import  { SafeAreaView } from "react-native-safe-area-context";


type Props = {
  onContinue: () => void;
};

export function VerifiedScreen({ onContinue }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.successContainer}>
        <View style={styles.successCheck}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
        <Text style={styles.successTitle}>You're verified</Text>
        <Text style={styles.successSubtitle}>
          Your account is now protected with MFA.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={onContinue}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
