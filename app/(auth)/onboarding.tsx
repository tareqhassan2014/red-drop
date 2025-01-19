import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function OnboardingScreen() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.slideContainer}>
                <Image
                    source={require("@/assets/images/onboarding.jpeg")}
                    style={styles.image}
                />
                <View style={styles.dotContainer}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>
                <ThemedText type="title" style={styles.title}>
                    Collection of Blood from Registered Donor
                </ThemedText>
                <ThemedText style={styles.description}>
                    Find blood donors near you and request for blood donation
                </ThemedText>
            </View>
            <Link href="/(tabs)" asChild>
                <ThemedView style={styles.button}>
                    <ThemedText style={styles.buttonText}>
                        Get Started
                    </ThemedText>
                </ThemedView>
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
    },
    dotContainer: {
        flexDirection: "row",
        marginTop: 20,
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#D9D9D9",
    },
    activeDot: {
        backgroundColor: "#E11D48",
        width: 20,
    },
    title: {
        textAlign: "center",
        marginTop: 24,
        marginBottom: 12,
    },
    description: {
        textAlign: "center",
        color: "#666",
    },
    button: {
        backgroundColor: "#E11D48",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
