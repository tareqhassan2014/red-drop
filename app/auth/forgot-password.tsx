import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleResetPassword = () => {
        // TODO: Implement password reset logic
        alert("Password reset link sent to your email");
        router.push("/auth/verify-code");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text variant="headlineLarge" style={styles.title}>
                    Reset Password
                </Text>
                <Text variant="bodyMedium" style={styles.subtitle}>
                    Enter your email address to receive password reset
                    instructions
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    label="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />

                <Button
                    mode="contained"
                    onPress={handleResetPassword}
                    style={styles.resetButton}
                >
                    Send Reset Link
                </Button>

                <Button
                    mode="text"
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    Back to Login
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
    },
    resetButton: {
        marginBottom: 12,
        paddingVertical: 6,
    },
    backButton: {
        paddingVertical: 6,
    },
});
