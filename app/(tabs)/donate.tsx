import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function DonateScreen() {
    const [name, setName] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [healthStatus, setHealthStatus] = useState("");
    const [lastDonation, setLastDonation] = useState("");
    const [availability, setAvailability] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [consent, setConsent] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={24}
                        color="#000"
                    />
                    <Text variant="headlineMedium" style={styles.title}>
                        Donate Blood
                    </Text>
                </View>
                <MaterialCommunityIcons name="bell" size={24} color="#000" />
            </View>

            <View style={styles.form}>
                <TextInput
                    label="Full Name"
                    value={name}
                    onChangeText={setName}
                    mode="outlined"
                    placeholder="Your name here"
                    style={styles.input}
                />

                <TextInput
                    label="Blood Type"
                    value={bloodType}
                    onChangeText={setBloodType}
                    mode="outlined"
                    placeholder="Select Your Blood Type"
                    right={<TextInput.Icon icon="chevron-down" />}
                    style={styles.input}
                />

                <TextInput
                    label="Health Status"
                    value={healthStatus}
                    onChangeText={setHealthStatus}
                    mode="outlined"
                    placeholder="Recent surgery, allergy, vaccine or taking medicine"
                    multiline
                    numberOfLines={3}
                    style={styles.input}
                />

                <TextInput
                    label="Last Donation Date"
                    value={lastDonation}
                    onChangeText={setLastDonation}
                    mode="outlined"
                    placeholder="Select Date"
                    right={<TextInput.Icon icon="calendar" />}
                    style={styles.input}
                />

                <TextInput
                    label="Availability"
                    value={availability}
                    onChangeText={setAvailability}
                    mode="outlined"
                    placeholder="e.g., Dhaka city, till January 2025"
                    style={styles.input}
                />

                <TextInput
                    label="Weight"
                    value={weight}
                    onChangeText={setWeight}
                    mode="outlined"
                    placeholder="Select Your Weight"
                    right={<TextInput.Icon icon="chevron-down" />}
                    style={styles.input}
                />

                <TextInput
                    label="Age"
                    value={age}
                    onChangeText={setAge}
                    mode="outlined"
                    placeholder="Select Your Age"
                    right={<TextInput.Icon icon="chevron-down" />}
                    style={styles.input}
                />

                <View style={styles.consentContainer}>
                    <Checkbox.Android
                        status={consent ? "checked" : "unchecked"}
                        onPress={() => setConsent(!consent)}
                    />
                    <Text variant="bodySmall" style={styles.consentText}>
                        I voluntarily consent to donate blood and agree to any
                        necessary medical checks before donation.
                    </Text>
                </View>

                <Button
                    mode="contained"
                    onPress={() => {
                        /* TODO: Implement donation submission */
                    }}
                    style={styles.submitButton}
                >
                    Proceed to Donate
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingTop: 60,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        marginLeft: 12,
    },
    form: {
        padding: 20,
    },
    input: {
        marginBottom: 16,
    },
    consentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },
    consentText: {
        flex: 1,
        marginLeft: 8,
    },
    submitButton: {
        paddingVertical: 6,
    },
});
