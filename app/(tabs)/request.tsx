import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const BLOOD_GROUPS = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];

export default function RequestBloodScreen() {
    const router = useRouter();
    const [selectedBloodGroup, setSelectedBloodGroup] = useState<string | null>(
        null
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
                        Request Blood
                    </ThemedText>
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <Image
                        source={require("@/assets/images/profile.jpeg")}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity>
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Blood Group Selection */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>
                        Choose the blood group
                    </ThemedText>
                    <View style={styles.bloodGroupGrid}>
                        {BLOOD_GROUPS.map((group) => (
                            <TouchableOpacity
                                key={group}
                                style={[
                                    styles.bloodGroupItem,
                                    selectedBloodGroup === group &&
                                        styles.selectedBloodGroup,
                                ]}
                                onPress={() => setSelectedBloodGroup(group)}
                            >
                                <ThemedText
                                    style={[
                                        styles.bloodGroupText,
                                        selectedBloodGroup === group &&
                                            styles.selectedBloodGroupText,
                                    ]}
                                >
                                    {group}
                                </ThemedText>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Amount Selection */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>
                        Choose your Amount
                    </ThemedText>
                    <TouchableOpacity style={styles.input}>
                        <ThemedText style={styles.inputText}>
                            Quantity
                        </ThemedText>
                        <Ionicons
                            name="chevron-down"
                            size={20}
                            color="#8B1818"
                        />
                    </TouchableOpacity>
                </View>

                {/* Location Selection */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>
                        Choose your location
                    </ThemedText>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Select Location"
                            style={styles.inputText}
                            placeholderTextColor="#666"
                        />
                        <Ionicons name="location" size={20} color="#8B1818" />
                    </View>
                </View>

                {/* Contact Information */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>
                        Contact Information
                    </ThemedText>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Mobile/Telephone"
                            style={styles.inputText}
                            placeholderTextColor="#666"
                            keyboardType="phone-pad"
                        />
                        <Ionicons name="pencil" size={20} color="#8B1818" />
                    </View>
                </View>

                {/* Patient Information */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>
                        Patient Information
                    </ThemedText>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Disease/Cause"
                            style={styles.inputText}
                            placeholderTextColor="#666"
                        />
                        <Ionicons name="pencil" size={20} color="#8B1818" />
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.primaryButton}>
                        <ThemedText style={styles.primaryButtonText}>
                            Request Now
                        </ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <ThemedText style={styles.secondaryButtonText}>
                            Save for later
                        </ThemedText>
                    </TouchableOpacity>
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
        padding: 16,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        color: "#333",
        marginBottom: 12,
    },
    bloodGroupGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        justifyContent: "space-between",
    },
    bloodGroupItem: {
        width: "22%",
        aspectRatio: 1,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E11D48",
        justifyContent: "center",
        alignItems: "center",
    },
    selectedBloodGroup: {
        backgroundColor: "#8B1818",
    },
    bloodGroupText: {
        fontSize: 16,
        color: "#E11D48",
        fontWeight: "600",
    },
    selectedBloodGroupText: {
        color: "#fff",
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
    },
    inputText: {
        fontSize: 16,
        color: "#666",
        flex: 1,
    },
    buttonContainer: {
        gap: 12,
        marginTop: 12,
        marginBottom: 30,
    },
    primaryButton: {
        backgroundColor: "#8B1818",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    primaryButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    secondaryButton: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#8B1818",
    },
    secondaryButtonText: {
        color: "#8B1818",
        fontSize: 16,
        fontWeight: "600",
    },
});
