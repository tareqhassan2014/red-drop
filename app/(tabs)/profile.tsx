import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Profile Header */}
            <View style={styles.header}>
                <View style={styles.profileInfo}>
                    <Avatar.Image
                        size={80}
                        source={{ uri: "https://placeholder.com/150" }}
                    />
                    <View style={styles.userInfo}>
                        <Text variant="titleLarge">Hasibur Rahman</Text>
                        <View style={styles.locationRow}>
                            <MaterialCommunityIcons
                                name="map-marker"
                                size={16}
                                color="#666"
                            />
                            <Text variant="bodyMedium">Mirpur 10, Dhaka</Text>
                        </View>
                    </View>
                    <View style={styles.bloodBadge}>
                        <Text style={styles.bloodType}>A+</Text>
                    </View>
                </View>
            </View>

            {/* Menu Options */}
            <View style={styles.menuSection}>
                <Text variant="titleMedium" style={styles.sectionTitle}>
                    Inventories
                </Text>

                <Card style={styles.menuCard}>
                    <Card.Content>
                        <Button
                            mode="text"
                            icon="account"
                            contentStyle={styles.menuButton}
                            onPress={() => {}}
                        >
                            Account Information
                        </Button>
                        <Button
                            mode="text"
                            icon="headphones"
                            contentStyle={styles.menuButton}
                            onPress={() => {}}
                        >
                            Support
                        </Button>
                    </Card.Content>
                </Card>

                <Text
                    variant="titleMedium"
                    style={[styles.sectionTitle, styles.topSpacing]}
                >
                    Historical
                </Text>

                <Card style={styles.menuCard}>
                    <Card.Content>
                        <Button
                            mode="text"
                            icon="bookmark"
                            contentStyle={styles.menuButton}
                            onPress={() => {}}
                        >
                            Bookmarks
                        </Button>
                        <Button
                            mode="text"
                            icon="clock"
                            contentStyle={styles.menuButton}
                            onPress={() => {}}
                        >
                            Recent Activities
                        </Button>
                    </Card.Content>
                </Card>

                {/* Logout Button */}
                <Button
                    mode="text"
                    icon="logout"
                    contentStyle={styles.menuButton}
                    textColor="#E53935"
                    onPress={() => {
                        /* TODO: Implement logout */
                    }}
                    style={styles.logoutButton}
                >
                    Logout
                </Button>
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
        backgroundColor: "#E53935",
        padding: 20,
        paddingTop: 60,
        paddingBottom: 40,
    },
    profileInfo: {
        alignItems: "center",
    },
    userInfo: {
        alignItems: "center",
        marginTop: 12,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    bloodBadge: {
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16,
        marginTop: 8,
    },
    bloodType: {
        color: "#E53935",
        fontWeight: "bold",
    },
    menuSection: {
        padding: 20,
    },
    sectionTitle: {
        fontWeight: "bold",
        marginBottom: 12,
    },
    menuCard: {
        marginBottom: 16,
    },
    menuButton: {
        justifyContent: "flex-start",
    },
    topSpacing: {
        marginTop: 8,
    },
    logoutButton: {
        marginTop: 8,
    },
});
