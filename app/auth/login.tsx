import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        // TODO: Add actual authentication logic here

        // For now, just navigate to home
        router.replace("/(tabs)/home");
    };

    const handleForgotPassword = () => {
        router.push("/auth/forgot-password");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text variant="headlineLarge" style={styles.title}>
                    Login
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

                <TextInput
                    label="Password"
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

                <Button
                    mode="text"
                    onPress={handleForgotPassword}
                    style={styles.forgotPassword}
                    textColor="#2196F3"
                >
                    Forgot Password?
                </Button>

                <Button
                    mode="contained"
                    onPress={handleLogin}
                    style={styles.loginButton}
                >
                    Log In
                </Button>

                <Button
                    mode="outlined"
                    onPress={() => router.push("/auth/register")}
                    style={styles.registerButton}
                >
                    Create Account
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
    },
    form: {
        padding: 20,
    },
    input: {
        marginBottom: 16,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginBottom: 24,
    },
    loginButton: {
        marginBottom: 12,
        paddingVertical: 6,
    },
    registerButton: {
        paddingVertical: 6,
    },
});
