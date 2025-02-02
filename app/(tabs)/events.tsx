import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Searchbar, Text } from "react-native-paper";

export default function EventsScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text variant="headlineMedium" style={styles.title}>
                    Donation Events
                </Text>
                <MaterialCommunityIcons name="bell" size={24} color="#000" />
            </View>

            <View style={styles.searchSection}>
                <Searchbar
                    placeholder="Search events..."
                    style={styles.searchBar}
                />
                <MaterialCommunityIcons
                    name="calendar"
                    size={24}
                    color="#666"
                />
            </View>

            <Card style={styles.nearbyCard}>
                <Card.Content>
                    <Text variant="titleMedium">Find Nearby Events</Text>
                    <Text variant="bodySmall">
                        Locate Nearby Blood Donation
                    </Text>
                </Card.Content>
                <Card.Actions>
                    <Button>View Map</Button>
                </Card.Actions>
            </Card>

            <View style={styles.section}>
                <Text variant="titleMedium" style={styles.sectionTitle}>
                    Upcoming Events
                </Text>
                <Card style={styles.eventCard}>
                    <Card.Content>
                        <Text variant="titleMedium">
                            Annual Blood Drive 2024
                        </Text>
                        <Text variant="bodyMedium">
                            10th October - 15th October
                        </Text>
                        <Text variant="bodySmall">10 AM - 6 PM</Text>
                    </Card.Content>
                </Card>
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontWeight: "bold",
    },
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    searchBar: {
        flex: 1,
        marginRight: 12,
    },
    nearbyCard: {
        margin: 20,
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        marginBottom: 12,
    },
    eventCard: {
        marginBottom: 12,
    },
});
