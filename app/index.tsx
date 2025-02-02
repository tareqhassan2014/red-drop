import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        // Simulate splash screen delay
        const timer = setTimeout(() => {
            router.replace("/onboarding");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Text variant="displayLarge" style={styles.logo}>
                RedHope
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        color: "#E53935",
        fontWeight: "bold",
    },
});
