import React from "react";
import {

  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { styles } from "../styles";
import  { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  onSelectTOTP: () => void;
  onSelectEmail: () => void;
};

export function MFAMethodSelectionScreen({
  onSelectTOTP,
  onSelectEmail,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Secure your account</Text>
      <Text style={styles.subtitle}>
        Choose how you want to verify your identity
      </Text>

      <TouchableOpacity
        style={[styles.methodCard, styles.recommendedCard]}
        onPress={onSelectTOTP}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaHwBZT1fyg-cbyGjphCgtkL6oi5Nq7-Fww&s",
          }}
          style={styles.icon}
        />
        <View style={styles.methodText}>
          <Text style={styles.methodTitle}>Authenticator App</Text>
          <Text style={styles.recommendedBadge}>Recommended</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.methodCard} onPress={onSelectEmail}>
        <Image
          source={{ uri: "https://img.icons8.com/color/96/000000/gmail.png" }}
          style={styles.icon}
        />
        <Text style={styles.methodTitle}>Email Verification</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
