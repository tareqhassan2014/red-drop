import { NotificationBell } from "@/components/NotificationBell";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.profileImage}
                    />
                    <View>
                        <ThemedText style={styles.name}>
                            Hasibur Rahman
                        </ThemedText>
                        <ThemedText style={styles.location}>
                            Mirpur 10, Dhaka
                        </ThemedText>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <NotificationBell color="#fff" />
                </View>
            </View>

            {/* Stats Section */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.statIcon}
                    />
                    <View>
                        <ThemedText style={styles.statLabel}>
                            Lifesaver
                        </ThemedText>
                        <ThemedText style={styles.statValue}>
                            15 People
                        </ThemedText>
                    </View>
                </View>
                <View style={styles.statItem}>
                    <Ionicons name="calendar-outline" size={24} color="#fff" />
                    <View>
                        <ThemedText style={styles.statValue}>
                            19.12.2024
                        </ThemedText>
                        <ThemedText style={styles.statLabel}>
                            54 Days Left
                        </ThemedText>
                    </View>
                </View>
                <View style={styles.bloodType}>
                    <ThemedText style={styles.bloodTypeText}>A+</ThemedText>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Campaign Section */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>
                        Blood Donate Campaign
                    </ThemedText>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity
                            style={[
                                styles.campaignCard,
                                { backgroundColor: "#8B1818" },
                            ]}
                        >
                            <ThemedText style={styles.campaignTitle}>
                                Annual
                            </ThemedText>
                            <ThemedText style={styles.campaignSubtitle}>
                                Blood Drive 2024
                            </ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.campaignCard,
                                { backgroundColor: "#7E3AF2" },
                            ]}
                        >
                            <ThemedText style={styles.campaignTitle}>
                                City Hall
                            </ThemedText>
                            <ThemedText style={styles.campaignSubtitle}>
                                Blood Donation
                            </ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.campaignCard,
                                { backgroundColor: "#C2940A" },
                            ]}
                        >
                            <ThemedText style={styles.campaignTitle}>
                                National
                            </ThemedText>
                            <ThemedText style={styles.campaignSubtitle}>
                                Blood Donation Week
                            </ThemedText>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* Quick Actions Grid */}
                <View style={styles.grid}>
                    <TouchableOpacity style={styles.gridItem}>
                        <Image
                            source={require("@/assets/images/profile.jpeg")}
                            style={styles.gridIcon}
                        />
                        <ThemedText style={styles.gridLabel}>
                            Donate Blood
                        </ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <Image
                            source={require("@/assets/images/profile.jpeg")}
                            style={styles.gridIcon}
                        />
                        <ThemedText style={styles.gridLabel}>
                            Request Blood
                        </ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <Image
                            source={require("@/assets/images/profile.jpeg")}
                            style={styles.gridIcon}
                        />
                        <ThemedText style={styles.gridLabel}>
                            Blood Bank
                        </ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <Image
                            source={require("@/assets/images/profile.jpeg")}
                            style={styles.gridIcon}
                        />
                        <ThemedText style={styles.gridLabel}>
                            Hospital
                        </ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <Image
                            source={require("@/assets/images/profile.jpeg")}
                            style={styles.gridIcon}
                        />
                        <ThemedText style={styles.gridLabel}>Inbox</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <Image
                            source={require("@/assets/images/profile.jpeg")}
                            style={styles.gridIcon}
                        />
                        <ThemedText style={styles.gridLabel}>
                            Emergency Numbers
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        backgroundColor: "#E11D48",
        padding: 20,
        paddingTop: Platform.OS === "ios" ? 60 : 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    name: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    location: {
        color: "#fff",
        fontSize: 14,
    },
    statsContainer: {
        backgroundColor: "#E11D48",
        padding: 20,
        paddingTop: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    statItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    statIcon: {
        width: 24,
        height: 24,
    },
    statLabel: {
        color: "#fff",
        fontSize: 12,
    },
    statValue: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    bloodType: {
        backgroundColor: "#fff",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    bloodTypeText: {
        color: "#E11D48",
        fontSize: 16,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    campaignCard: {
        width: 150,
        height: 100,
        borderRadius: 12,
        padding: 15,
        marginRight: 12,
        justifyContent: "flex-end",
    },
    campaignTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    campaignSubtitle: {
        color: "#fff",
        fontSize: 12,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 16,
    },
    gridItem: {
        width: "47%",
        backgroundColor: "#F5F5F5",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        gap: 8,
    },
    gridIcon: {
        width: 32,
        height: 32,
    },
    gridLabel: {
        fontSize: 14,
        textAlign: "center",
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
});
