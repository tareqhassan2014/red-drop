import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function NewPasswordScreen() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleResetPassword = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // TODO: Implement password reset logic
        alert("Password reset successful");
        router.replace("/auth/login");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text variant="headlineLarge" style={styles.title}>
                    New Password
                </Text>
                <Text variant="bodyMedium" style={styles.subtitle}>
                    Create a new password for your account
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    label="New Password"
                    value={password}
                    onChangeText={setPassword}
                    mode="outlined"
                    secureTextEntry={!showPassword}
                    right={
                        <TextInput.Icon
                            icon={showPassword ? "eye-off" : "eye"}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    style={styles.input}
                />

                <TextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    mode="outlined"
                    secureTextEntry={!showPassword}
                    right={
                        <TextInput.Icon
                            icon={showPassword ? "eye-off" : "eye"}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    style={styles.input}
                />

                <Button
                    mode="contained"
                    onPress={handleResetPassword}
                    style={styles.resetButton}
                >
                    Reset Password
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
});
