import HeaderWithNotification from "@/components/HeaderWithNotification";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Divider, List, Switch, Text } from "react-native-paper";

interface PrivacySettings {
    showProfile: boolean;
    showLocation: boolean;
    showDonationHistory: boolean;
    allowMessages: boolean;
    emailNotifications: boolean;
}

// Add this to dataSlice later
const initialSettings: PrivacySettings = {
    showProfile: true,
    showLocation: true,
    showDonationHistory: true,
    allowMessages: true,
    emailNotifications: true,
};

export default function PrivacySettingsScreen() {
    const router = useRouter();
    const [settings, setSettings] =
        React.useState<PrivacySettings>(initialSettings);

    const handleToggle = (key: keyof PrivacySettings) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleSave = () => {
        // TODO: Save settings to backend
        router.back();
    };

    return (
        <ScrollView style={styles.container}>
            <HeaderWithNotification title="Privacy Settings" />

            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Profile Privacy
                    </Text>
                    <List.Item
                        title="Show Profile"
                        description="Allow others to view your profile"
                        right={() => (
                            <Switch
                                value={settings.showProfile}
                                onValueChange={() =>
                                    handleToggle("showProfile")
                                }
                            />
                        )}
                    />
                    <Divider />
                    <List.Item
                        title="Show Location"
                        description="Display your location to potential donors"
                        right={() => (
                            <Switch
                                value={settings.showLocation}
                                onValueChange={() =>
                                    handleToggle("showLocation")
                                }
                            />
                        )}
                    />
                    <Divider />
                    <List.Item
                        title="Show Donation History"
                        description="Make your donation history visible"
                        right={() => (
                            <Switch
                                value={settings.showDonationHistory}
                                onValueChange={() =>
                                    handleToggle("showDonationHistory")
                                }
                            />
                        )}
                    />
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Communication
                    </Text>
                    <List.Item
                        title="Allow Messages"
                        description="Receive messages from other users"
                        right={() => (
                            <Switch
                                value={settings.allowMessages}
                                onValueChange={() =>
                                    handleToggle("allowMessages")
                                }
                            />
                        )}
                    />
                    <Divider />
                    <List.Item
                        title="Email Notifications"
                        description="Receive updates via email"
                        right={() => (
                            <Switch
                                value={settings.emailNotifications}
                                onValueChange={() =>
                                    handleToggle("emailNotifications")
                                }
                            />
                        )}
                    />
                </Card.Content>
            </Card>

            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={handleSave}
                    style={styles.saveButton}
                >
                    Save Changes
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
    card: {
        margin: 20,
        marginTop: 0,
    },
    sectionTitle: {
        fontWeight: "bold",
        marginBottom: 12,
    },
    buttonContainer: {
        padding: 20,
    },
    saveButton: {
        paddingVertical: 6,
    },
});
