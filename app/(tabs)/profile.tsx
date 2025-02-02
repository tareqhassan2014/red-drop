import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import {
    Avatar,
    Button,
    Card,
    Divider,
    List,
    Text,
    TouchableRipple,
} from "react-native-paper";
import HeaderWithNotification from "../../components/HeaderWithNotification";
import { logout } from "../../src/features/auth/authSlice";
import { selectDonations, selectProfile } from "../../src/features/data/dataSlice";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";

// Sample user data
const userData = {
    name: "Hasibur Rahman",
    bloodType: "A+",
    location: "Mirpur 10, Dhaka",
    email: "hasib@example.com",
    phone: "+880 1234-567890",
    lastDonation: "2024-01-15",
    totalDonations: 15,
    nextDonationDate: "2024-04-15",
    avatar: "https://i.pravatar.cc/150?img=3",
};

const donationHistory = [
    {
        id: 1,
        date: "2024-01-15",
        hospital: "Square Hospital",
        location: "Panthapath, Dhaka",
        recipient: "John Doe",
    },
    {
        id: 2,
        date: "2023-10-10",
        hospital: "United Hospital",
        location: "Gulshan, Dhaka",
        recipient: "Jane Smith",
    },
    {
        id: 3,
        date: "2023-07-05",
        hospital: "Apollo Hospital",
        location: "Bashundhara, Dhaka",
        recipient: "Mike Johnson",
    },
];

export default function ProfileScreen() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const profile = useAppSelector(selectProfile);
    const donations = useAppSelector(selectDonations);

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Logout",
                    onPress: () => {
                        dispatch(logout());
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView style={styles.container}>
            <HeaderWithNotification title="Profile" />

            {/* Profile Header */}
            <View style={styles.header}>
                <Avatar.Image size={100} source={{ uri: profile.avatar }} />
                <Text variant="headlineSmall" style={styles.name}>
                    {profile.name}
                </Text>
                <View style={styles.bloodTypeContainer}>
                    <MaterialCommunityIcons
                        name="water"
                        size={20}
                        color="#E53935"
                    />
                    <Text variant="titleMedium" style={styles.bloodType}>
                        {profile.bloodType}
                    </Text>
                </View>
            </View>

            {/* Stats Card */}
            <Card style={styles.statsCard}>
                <Card.Content style={styles.statsContent}>
                    <View style={styles.statItem}>
                        <Text variant="headlineMedium" style={styles.statNumber}>
                            {profile.totalDonations}
                        </Text>
                        <Text variant="bodySmall">Total Donations</Text>
                    </View>
                    <Divider style={styles.verticalDivider} />
                    <View style={styles.statItem}>
                        <Text
                            variant="headlineMedium"
                            style={[styles.statNumber, styles.nextDonation]}
                        >
                            54
                        </Text>
                        <Text variant="bodySmall">Days Until Next</Text>
                    </View>
                </Card.Content>
            </Card>

            {/* Personal Information */}
            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Personal Information
                    </Text>
                    <List.Item
                        title="Location"
                        description={profile.location}
                        left={(props) => (
                            <List.Icon {...props} icon="map-marker" />
                        )}
                    />
                    <List.Item
                        title="Email"
                        description={profile.email}
                        left={(props) => <List.Icon {...props} icon="email" />}
                    />
                    <List.Item
                        title="Phone"
                        description={profile.phone}
                        left={(props) => <List.Icon {...props} icon="phone" />}
                    />
                </Card.Content>
            </Card>

            {/* Donation History */}
            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Recent Donations
                    </Text>
                    {donations.map((donation, index) => (
                        <React.Fragment key={donation.id}>
                            <TouchableRipple
                                onPress={() => {
                                    /* TODO: Show donation details */
                                }}
                            >
                                <List.Item
                                    title={donation.hospital}
                                    description={`${donation.date} • ${donation.location}`}
                                    left={(props) => (
                                        <List.Icon
                                            {...props}
                                            icon="hospital-building"
                                        />
                                    )}
                                />
                            </TouchableRipple>
                            {index < donations.length - 1 && (
                                <Divider />
                            )}
                        </React.Fragment>
                    ))}
                    <Button
                        mode="text"
                        onPress={() => {
                            /* TODO: View all donations */
                        }}
                        style={styles.viewAllButton}
                    >
                        View All Donations
                    </Button>
                </Card.Content>
            </Card>

            {/* Settings */}
            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Settings
                    </Text>
                    <List.Item
                        title="Edit Profile"
                        left={(props) => (
                            <List.Icon {...props} icon="account-edit" />
                        )}
                        right={(props) => (
                            <List.Icon {...props} icon="chevron-right" />
                        )}
                        onPress={() => {
                            /* TODO: Navigate to edit profile */
                        }}
                    />
                    <Divider />
                    <List.Item
                        title="Notifications"
                        left={(props) => (
                            <List.Icon {...props} icon="bell-outline" />
                        )}
                        right={(props) => (
                            <List.Icon {...props} icon="chevron-right" />
                        )}
                        onPress={() => {
                            router.push("/notifications");
                        }}
                    />
                    <Divider />
                    <List.Item
                        title="Privacy Settings"
                        left={(props) => (
                            <List.Icon {...props} icon="shield-account" />
                        )}
                        right={(props) => (
                            <List.Icon {...props} icon="chevron-right" />
                        )}
                        onPress={() => {
                            router.push("/settings/privacy");
                        }}
                    />
                    <Divider />
                    <List.Item
                        title="Logout"
                        left={(props) => <List.Icon {...props} icon="logout" />}
                        onPress={handleLogout}
                        titleStyle={styles.logoutText}
                    />
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        alignItems: "center",
        padding: 20,
    },
    name: {
        fontWeight: "bold",
        marginTop: 12,
    },
    bloodTypeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    bloodType: {
        marginLeft: 4,
        color: "#E53935",
        fontWeight: "500",
    },
    statsCard: {
        margin: 20,
        marginTop: 0,
    },
    statsContent: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 16,
    },
    statItem: {
        alignItems: "center",
    },
    statNumber: {
        fontWeight: "bold",
        color: "#4CAF50",
    },
    nextDonation: {
        color: "#E53935",
    },
    verticalDivider: {
        height: "100%",
        width: 1,
    },
    card: {
        margin: 20,
        marginTop: 0,
    },
    sectionTitle: {
        fontWeight: "bold",
        marginBottom: 12,
    },
    viewAllButton: {
        marginTop: 8,
    },
    logoutText: {
        color: "#E53935",
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
