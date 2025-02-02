import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function VerifyCodeScreen() {
    const [code, setCode] = useState("");
    const router = useRouter();

    const handleVerifyCode = () => {
        // TODO: Implement code verification logic
        router.push("/auth/new-password");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text variant="headlineLarge" style={styles.title}>
                    Verify Code
                </Text>
                <Text variant="bodyMedium" style={styles.subtitle}>
                    Enter the verification code sent to your email address
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    label="Verification Code"
                    value={code}
                    onChangeText={setCode}
                    mode="outlined"
                    keyboardType="number-pad"
                    maxLength={6}
                    style={styles.input}
                />

                <Button
                    mode="contained"
                    onPress={handleVerifyCode}
                    style={styles.verifyButton}
                >
                    Verify Code
                </Button>

                <Button
                    mode="text"
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    Back
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        color: "#666",
    },
    form: {
        padding: 20,
    },
    input: {
        marginBottom: 16,
        letterSpacing: 4,
        fontSize: 20,
    },
    verifyButton: {
        marginBottom: 12,
        paddingVertical: 6,
    },
    backButton: {
        paddingVertical: 6,
    },
});
