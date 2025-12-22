import React, { useState, useRef } from "react";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
    NativeSyntheticEvent,
    TextInputKeyPressEventData,
} from "react-native";
import { OpenAuth } from "@openauthdev/sdk";
import { styles } from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    appSecret: string;
    externalUserId: string;
    onVerified: () => void;
};

export function TotpVerifyScreen({
    appSecret,
    externalUserId,
    onVerified,
}: Props) {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputs = useRef<Array<TextInput | null>>([]);

    const verify = async () => {
        try {
            await OpenAuth.verifyTOTP(externalUserId, code.join(""), appSecret);
            onVerified();
        } catch (e: any) {
            Alert.alert("Error", e.message || "Invalid code");
        }
    };

    const handleChange = (text: string, i: number) => {
        const next = [...code];
        next[i] = text;
        setCode(next);

        // jump to next box if input exists
        if (text && i < inputs.current.length - 1) {
            inputs.current[i + 1]?.focus();
        }
    };

    const handleKeyPress = (
        e: NativeSyntheticEvent<TextInputKeyPressEventData>,
        i: number
    ) => {
        // handle backspace
        if (e.nativeEvent.key === "Backspace") {
            const next = [...code];
            if (next[i]) {
                next[i] = "";
                setCode(next);
            } else if (i > 0) {
                inputs.current[i - 1]?.focus();
                next[i - 1] = "";
                setCode(next);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Enter authenticator code</Text>

            <View style={styles.codeInputContainer}>
                {code.map((digit, i) => (
                    <TextInput
                        key={i}
                        ref={(ref) => {
                            inputs.current[i] = ref;
                        }}
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="number-pad"
                        value={digit}
                        onChangeText={(t) => handleChange(t, i)}
                        onKeyPress={(e) => handleKeyPress(e, i)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={verify}>
                <Text style={styles.primaryButtonText}>Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
