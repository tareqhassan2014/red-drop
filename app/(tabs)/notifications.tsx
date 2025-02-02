import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, Divider, Text } from "react-native-paper";

// Sample notification data
const notifications = [
    {
        id: 1,
        type: "request",
        title: "Blood Request",
        message: "Emergency A+ blood needed at Square Hospital",
        time: "2 minutes ago",
        read: false,
    },
    {
        id: 2,
        type: "donation",
        title: "Donation Complete",
        message: "Thank you for donating blood! You've saved a life.",
        time: "1 hour ago",
        read: true,
    },
    {
        id: 3,
        type: "event",
        title: "Upcoming Blood Drive",
        message: "Blood donation camp this weekend at City Hall",
        time: "2 hours ago",
        read: true,
    },
];

export default function NotificationsScreen() {
    const getIcon = (type: string) => {
        switch (type) {
            case "request":
                return "clipboard-alert";
            case "donation":
                return "hand-heart";
            case "event":
                return "calendar-clock";
            default:
                return "bell";
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text variant="headlineMedium" style={styles.title}>
                    Notifications
                </Text>
                <MaterialCommunityIcons
                    name="dots-vertical"
                    size={24}
                    color="#000"
                />
            </View>

            <View style={styles.notificationList}>
                {notifications.map((notification, index) => (
                    <View key={notification.id}>
                        <Card
                            style={[
                                styles.notificationCard,
                                !notification.read && styles.unreadCard,
                            ]}
                        >
                            <Card.Content style={styles.cardContent}>
                                <View style={styles.iconContainer}>
                                    <Avatar.Icon
                                        size={40}
                                        icon={getIcon(notification.type)}
                                        style={[
                                            styles.icon,
                                            !notification.read &&
                                                styles.unreadIcon,
                                        ]}
                                    />
                                </View>
                                <View style={styles.notificationContent}>
                                    <Text
                                        variant="titleMedium"
                                        style={styles.notificationTitle}
                                    >
                                        {notification.title}
                                    </Text>
                                    <Text
                                        variant="bodyMedium"
                                        style={styles.message}
                                    >
                                        {notification.message}
                                    </Text>
                                    <Text
                                        variant="bodySmall"
                                        style={styles.timestamp}
                                    >
                                        {notification.time}
                                    </Text>
                                </View>
                            </Card.Content>
                        </Card>
                        {index < notifications.length - 1 && (
                            <Divider style={styles.divider} />
                        )}
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontWeight: "bold",
    },
    notificationList: {
        padding: 20,
    },
    notificationCard: {
        backgroundColor: "#fff",
        marginBottom: 4,
    },
    unreadCard: {
        backgroundColor: "#fef6f6",
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 8,
    },
    iconContainer: {
        marginRight: 12,
    },
    icon: {
        backgroundColor: "#f5f5f5",
    },
    unreadIcon: {
        backgroundColor: "#E53935",
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontWeight: "600",
        marginBottom: 4,
    },
    message: {
        color: "#666",
        marginBottom: 4,
    },
    timestamp: {
        color: "#999",
    },
    divider: {
        marginVertical: 8,
    },
});
