import { NotificationBell } from "@/components/NotificationBell";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

interface NotificationItem {
    id: string;
    type:
        | "location"
        | "campaign"
        | "donation"
        | "request"
        | "congrats"
        | "thanks"
        | "camp";
    title: string;
    subtitle?: string;
    time: string;
    image?: any;
    isNew?: boolean;
}

const TODAY_NOTIFICATIONS: NotificationItem[] = [
    {
        id: "1",
        type: "location",
        title: "Marry Rose Blood bank,",
        subtitle: "Now you can join donation",
        time: "1h",
        isNew: true,
    },
    {
        id: "2",
        type: "campaign",
        title: "Annual Blood Drive",
        subtitle: "10 to 15 October 2024",
        time: "4h",
        image: require("@/assets/images/profile.jpeg"),
    },
    {
        id: "3",
        type: "donation",
        title: "Marry Rose Blood bank,",
        subtitle: "Now you can join donation event",
        time: "5h",
        image: require("@/assets/images/profile.jpeg"),
    },
];

const OTHER_NOTIFICATIONS: NotificationItem[] = [
    {
        id: "4",
        type: "congrats",
        title: "Congratulation!",
        subtitle: "You select our Blood Donate",
        time: "11/09/24",
        image: require("@/assets/images/profile.jpeg"),
    },
    {
        id: "5",
        type: "thanks",
        title: "Say Thanks!",
        subtitle: "Hasan Saide Appreciate to",
        time: "01/07/24",
        image: require("@/assets/images/profile.jpeg"),
    },
    {
        id: "6",
        type: "camp",
        title: "Blood Camp",
        subtitle: "Bangladesh Red Crescent S",
        time: "28/06/24",
        image: require("@/assets/images/profile.jpeg"),
    },
];

export default function NotificationScreen() {
    const router = useRouter();

    const renderNotificationItem = (item: NotificationItem) => (
        <TouchableOpacity key={item.id} style={styles.notificationItem}>
            <View style={styles.notificationContent}>
                {item.image ? (
                    <Image
                        source={item.image}
                        style={styles.notificationImage}
                    />
                ) : (
                    <View style={styles.locationIcon}>
                        <Ionicons name="location" size={20} color="#fff" />
                    </View>
                )}
                <View style={styles.notificationText}>
                    <ThemedText style={styles.notificationTitle}>
                        {item.title}
                    </ThemedText>
                    {item.subtitle && (
                        <ThemedText style={styles.notificationSubtitle}>
                            {item.subtitle}
                        </ThemedText>
                    )}
                </View>
                <View style={styles.notificationRight}>
                    <ThemedText style={styles.timeText}>{item.time}</ThemedText>
                    <TouchableOpacity>
                        <Ionicons
                            name="ellipsis-vertical"
                            size={20}
                            color="#666"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {item.isNew && <View style={styles.newDot} />}
        </TouchableOpacity>
    );

    return (
        <ThemedView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Ionicons name="chevron-back" size={24} color="#000" />
                    <ThemedText style={styles.headerTitle}>
                        Notification
                    </ThemedText>
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <NotificationBell />
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Today's Notifications */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>Today</ThemedText>
                    {TODAY_NOTIFICATIONS.map(renderNotificationItem)}
                </View>

                {/* Other Notifications */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>Other</ThemedText>
                    {OTHER_NOTIFICATIONS.map(renderNotificationItem)}
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        paddingTop: Platform.OS === "ios" ? 60 : 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 8,
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    content: {
        flex: 1,
    },
    section: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 16,
        color: "#666",
    },
    notificationItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        position: "relative",
    },
    notificationContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    notificationImage: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    locationIcon: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#E11D48",
        justifyContent: "center",
        alignItems: "center",
    },
    notificationText: {
        flex: 1,
        marginLeft: 12,
    },
    notificationTitle: {
        fontSize: 14,
        fontWeight: "500",
    },
    notificationSubtitle: {
        fontSize: 12,
        color: "#666",
        marginTop: 2,
    },
    notificationRight: {
        alignItems: "flex-end",
        gap: 4,
    },
    timeText: {
        fontSize: 12,
        color: "#666",
    },
    newDot: {
        position: "absolute",
        left: -8,
        top: "50%",
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#E11D48",
        transform: [{ translateY: -4 }],
    },
});
