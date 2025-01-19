import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function DonateScreen() {
    const router = useRouter();
    const [consent, setConsent] = useState(false);

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
                        Donate Blood
                    </ThemedText>
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons
                            name="ellipsis-vertical"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.form}>
                {/* Full Name */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>
                        Write Your Full Name
                    </ThemedText>
                    <TextInput
                        placeholder="Your name here"
                        style={styles.input}
                        placeholderTextColor="#666"
                    />
                </View>

                {/* Blood Type */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Blood Type</ThemedText>
                    <TouchableOpacity style={styles.input}>
                        <ThemedText style={styles.selectText}>
                            Select Your Blood Type
                        </ThemedText>
                        <Ionicons name="chevron-down" size={20} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Health Status */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Health Status</ThemedText>
                    <TextInput
                        placeholder="Recent surgery, allergy, vaccine or taking medicine"
                        style={styles.input}
                        placeholderTextColor="#666"
                    />
                </View>

                {/* Last Donation Date */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>
                        Last Donation Date
                    </ThemedText>
                    <TouchableOpacity style={styles.input}>
                        <ThemedText style={styles.selectText}>
                            Select Date
                        </ThemedText>
                        <Ionicons name="chevron-down" size={20} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Availability */}
                <View style={styles.inputGroup}>
                    <ThemedText style={styles.label}>Availability</ThemedText>
                    <TextInput
                        placeholder="e.g., Dhaka city, till January 2025"
                        style={styles.input}
                        placeholderTextColor="#666"
                    />
                </View>

                {/* Weight and Age */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <ThemedText style={styles.label}>Weight</ThemedText>
                        <TouchableOpacity style={styles.input}>
                            <ThemedText style={styles.selectText}>
                                Select Your Weight
                            </ThemedText>
                            <Ionicons
                                name="chevron-down"
                                size={20}
                                color="#666"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <ThemedText style={styles.label}>Age</ThemedText>
                        <TouchableOpacity style={styles.input}>
                            <ThemedText style={styles.selectText}>
                                Select Your Age
                            </ThemedText>
                            <Ionicons
                                name="chevron-down"
                                size={20}
                                color="#666"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Consent */}
                <View style={styles.consentContainer}>
                    <TouchableOpacity
                        style={styles.checkbox}
                        onPress={() => setConsent(!consent)}
                    >
                        {consent && (
                            <Ionicons
                                name="checkmark"
                                size={16}
                                color="#E11D48"
                            />
                        )}
                    </TouchableOpacity>
                    <ThemedText style={styles.consentText}>
                        I voluntarily consent to donate blood and agree to any
                        necessary medical checks before donation.
                    </ThemedText>
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.button}>
                    <ThemedText style={styles.buttonText}>
                        Proceed to Donate
                    </ThemedText>
                </TouchableOpacity>
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
        paddingHorizontal: 16,
        paddingTop: Platform.OS === "ios" ? 60 : 20,
        paddingBottom: 10,
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
        gap: 15,
    },
    form: {
        padding: 16,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    halfWidth: {
        flex: 1,
    },
    selectText: {
        color: "#666",
    },
    consentContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 20,
        gap: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "#E11D48",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    consentText: {
        flex: 1,
        fontSize: 14,
        color: "#666",
    },
    button: {
        backgroundColor: "#E11D48",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    notificationButton: {
        padding: 4,
    },
});
