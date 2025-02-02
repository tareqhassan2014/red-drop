import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, Searchbar, Text } from "react-native-paper";

export default function DonorScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text variant="headlineMedium" style={styles.title}>
                    Donor
                </Text>
                <MaterialCommunityIcons name="bell" size={24} color="#000" />
            </View>

            <Searchbar placeholder="Search donors" style={styles.searchBar} />

            <View style={styles.donorList}>
                {/* Donor Cards */}
                <Card style={styles.donorCard}>
                    <Card.Content>
                        <View style={styles.donorInfo}>
                            <Avatar.Image
                                size={50}
                                source={{ uri: "https://placeholder.com/150" }}
                            />
                            <View style={styles.donorDetails}>
                                <Text variant="titleMedium">
                                    Mahbubur Rahman
                                </Text>
                                <View style={styles.locationRow}>
                                    <MaterialCommunityIcons
                                        name="map-marker"
                                        size={16}
                                        color="#666"
                                    />
                                    <Text variant="bodySmall">
                                        Eskaton Garden Road, Dhaka
                                    </Text>
                                </View>
                                <View style={styles.locationRow}>
                                    <MaterialCommunityIcons
                                        name="phone"
                                        size={16}
                                        color="#666"
                                    />
                                    <Text variant="bodySmall">
                                        +8801799998888
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.bloodTypeContainer}>
                                <Text style={styles.bloodType}>A+</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

                {/* Additional donor cards can be added here */}
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
    searchBar: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    donorList: {
        padding: 20,
    },
    donorCard: {
        marginBottom: 16,
    },
    donorInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    donorDetails: {
        flex: 1,
        marginLeft: 12,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    bloodTypeContainer: {
        backgroundColor: "#E53935",
        borderRadius: 8,
        padding: 8,
    },
    bloodType: {
        color: "#fff",
        fontWeight: "bold",
    },
});
