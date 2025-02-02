import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
    Avatar,
    Card,
    Chip,
    Searchbar,
    Text,
    TouchableRipple,
} from "react-native-paper";
import BloodMatchResults from "../../components/BloodMatchResults";
import HeaderWithNotification from "../../components/HeaderWithNotification";
import { bloodGroupsList, donors } from "../../src/data/donors";

export default function DonorScreen() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBloodType, setSelectedBloodType] = useState<string | null>(
        null
    );

    const filteredDonors = donors.filter((donor) => {
        const matchesSearch = donor.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesBloodType = selectedBloodType
            ? donor.bloodType === selectedBloodType
            : true;
        return matchesSearch && matchesBloodType;
    });

    return (
        <ScrollView style={styles.container}>
            <HeaderWithNotification title="Find Donors" />

            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Search donors"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchBar}
                />

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.filterContainer}
                >
                    {bloodGroupsList.map((group) => (
                        <Chip
                            key={group}
                            selected={selectedBloodType === group}
                            onPress={() =>
                                setSelectedBloodType(
                                    selectedBloodType === group ? null : group
                                )
                            }
                            style={styles.filterChip}
                            showSelectedOverlay
                        >
                            {group}
                        </Chip>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.donorList}>
                {filteredDonors.map((donor) => (
                    <TouchableRipple
                        key={donor.id}
                        onPress={() => {
                            /* TODO: Navigate to donor details */
                        }}
                    >
                        <Card style={styles.donorCard}>
                            <Card.Content style={styles.cardContent}>
                                <View style={styles.avatarContainer}>
                                    <Avatar.Image
                                        size={60}
                                        source={{ uri: donor.avatar }}
                                    />
                                    <Chip
                                        style={styles.bloodTypeChip}
                                        textStyle={styles.bloodTypeText}
                                    >
                                        {donor.bloodType}
                                    </Chip>
                                </View>

                                <View style={styles.donorInfo}>
                                    <Text
                                        variant="titleMedium"
                                        style={styles.name}
                                    >
                                        {donor.name}
                                    </Text>
                                    <View style={styles.locationContainer}>
                                        <MaterialCommunityIcons
                                            name="map-marker"
                                            size={16}
                                            color="#666"
                                        />
                                        <Text
                                            variant="bodySmall"
                                            style={styles.location}
                                        >
                                            {donor.location}
                                        </Text>
                                    </View>
                                    <View style={styles.statsContainer}>
                                        <Text variant="bodySmall">
                                            {donor.donations} donations
                                        </Text>
                                        <Text
                                            variant="bodySmall"
                                            style={[
                                                styles.status,
                                                donor.available
                                                    ? styles.available
                                                    : styles.unavailable,
                                            ]}
                                        >
                                            {donor.available
                                                ? "Available"
                                                : "Unavailable"}
                                        </Text>
                                    </View>
                                </View>
                            </Card.Content>
                        </Card>
                    </TouchableRipple>
                ))}
            </View>

            <BloodMatchResults bloodType={selectedBloodType || "A+"} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchContainer: {
        padding: 20,
    },
    searchBar: {
        marginBottom: 16,
    },
    filterContainer: {
        flexDirection: "row",
        marginLeft: -20,
        paddingLeft: 20,
    },
    filterChip: {
        marginRight: 8,
    },
    donorList: {
        padding: 20,
        paddingTop: 0,
    },
    donorCard: {
        marginBottom: 16,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatarContainer: {
        alignItems: "center",
    },
    bloodTypeChip: {
        marginTop: 8,
        backgroundColor: "#E53935",
    },
    bloodTypeText: {
        color: "#fff",
        fontWeight: "bold",
    },
    donorInfo: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontWeight: "600",
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    location: {
        marginLeft: 4,
        color: "#666",
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    status: {
        fontWeight: "500",
    },
    available: {
        color: "#4CAF50",
    },
    unavailable: {
        color: "#757575",
    },
});
