import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <ThemedView style={styles.header}>
                <View style={styles.profileSection}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.profileImage}
                    />
                    <View>
                        <ThemedText type="title">Hasibur Rahman</ThemedText>
                        <ThemedText style={styles.location}>
                            Mirpur 10, Dhaka
                        </ThemedText>
                    </View>
                </View>
            </ThemedView>

            <View style={styles.grid}>
                <ThemedView style={styles.card}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.cardIcon}
                    />
                    <ThemedText style={styles.cardTitle}>
                        Donate Blood
                    </ThemedText>
                </ThemedView>

                <ThemedView style={styles.card}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.cardIcon}
                    />
                    <ThemedText style={styles.cardTitle}>
                        Request Blood
                    </ThemedText>
                </ThemedView>

                <ThemedView style={styles.card}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.cardIcon}
                    />
                    <ThemedText style={styles.cardTitle}>Blood Bank</ThemedText>
                </ThemedView>

                <ThemedView style={styles.card}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.cardIcon}
                    />
                    <ThemedText style={styles.cardTitle}>Hospital</ThemedText>
                </ThemedView>
            </View>

            <ThemedView style={styles.campaignCard}>
                <ThemedText type="subtitle">Blood Donate Campaign</ThemedText>
                <Image
                    source={require("@/assets/images/profile.jpeg")}
                    style={styles.campaignImage}
                />
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    location: {
        color: "#666",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        gap: 10,
    },
    card: {
        width: "47%",
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    cardIcon: {
        width: 40,
        height: 40,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "500",
    },
    campaignCard: {
        margin: 20,
        padding: 20,
        borderRadius: 12,
    },
    campaignImage: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginTop: 10,
    },
});
