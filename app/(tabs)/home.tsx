import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import HeaderWithNotification from "../../components/HeaderWithNotification";

const menuItems = [
    { icon: "water", label: "Donate Blood" },
    { icon: "clipboard-text", label: "Request Blood" },
    { icon: "hospital-building", label: "Blood Bank" },
    { icon: "hospital-marker", label: "Hospital" },
    { icon: "inbox", label: "Inbox" },
    { icon: "phone", label: "Emergency Numbers" },
];

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <HeaderWithNotification title="Home" />

            {/* Campaign Carousel */}
            <View style={styles.campaignSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>
                    Blood Donation Campaigns
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.campaignScroll}
                >
                    <Card style={styles.campaignCard}>
                        <Card.Cover
                            source={{ uri: "https://placeholder.com/300x200" }}
                        />
                        <Card.Content>
                            <Text variant="titleMedium">
                                Annual Blood Drive 2024
                            </Text>
                            <Text variant="bodySmall">10th - 15th October</Text>
                        </Card.Content>
                    </Card>
                    <Card style={styles.campaignCard}>
                        <Card.Cover
                            source={{ uri: "https://placeholder.com/300x200" }}
                        />
                        <Card.Content>
                            <Text variant="titleMedium">
                                City Hall Blood Donation
                            </Text>
                            <Text variant="bodySmall">20th October</Text>
                        </Card.Content>
                    </Card>
                </ScrollView>
            </View>

            {/* Main Menu Grid */}
            <View style={styles.menuGrid}>
                {menuItems.map((item, index) => (
                    <View key={index} style={styles.menuItem}>
                        <Button
                            mode="contained-tonal"
                            icon={item.icon}
                            contentStyle={styles.menuButton}
                            labelStyle={styles.menuLabel}
                            onPress={() => {}}
                        >
                            {item.label}
                        </Button>
                    </View>
                ))}
            </View>
        </ScrollView>
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
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    userSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    userDetails: {
        marginLeft: 12,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    achievementSection: {
        marginTop: 20,
    },
    achievementBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 8,
    },
    bloodInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bloodType: {
        backgroundColor: "#E53935",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16,
    },
    bloodTypeText: {
        color: "#fff",
        fontWeight: "bold",
    },
    campaignSection: {
        padding: 20,
    },
    sectionTitle: {
        marginBottom: 16,
        fontWeight: "bold",
    },
    campaignScroll: {
        marginLeft: -20,
        paddingLeft: 20,
    },
    campaignCard: {
        width: 280,
        marginRight: 16,
    },
    menuGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        gap: 10,
    },
    menuItem: {
        width: "30%",
        aspectRatio: 1,
    },
    menuButton: {
        height: "100%",
        flexDirection: "column",
    },
    menuLabel: {
        fontSize: 12,
        marginTop: 8,
        textAlign: "center",
    },
});
