import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Chip, Text } from "react-native-paper";
import {
    getCompatibleDonors,
    getCompatibleRecipients,
} from "../src/data/bloodCompatibility";

interface BloodMatchResultsProps {
    bloodType: string;
}

export default function BloodMatchResults({
    bloodType,
}: BloodMatchResultsProps) {
    const compatibleDonors = getCompatibleDonors(bloodType);
    const compatibleRecipients = getCompatibleRecipients(bloodType);

    return (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.section}>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Can Receive From
                    </Text>
                    <View style={styles.chipContainer}>
                        {compatibleDonors.map((type) => (
                            <Chip
                                key={type}
                                style={[
                                    styles.chip,
                                    type === bloodType && styles.selectedChip,
                                ]}
                                textStyle={
                                    type === bloodType &&
                                    styles.selectedChipText
                                }
                            >
                                {type}
                            </Chip>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Can Donate To
                    </Text>
                    <View style={styles.chipContainer}>
                        {compatibleRecipients.map((type) => (
                            <Chip
                                key={type}
                                style={[
                                    styles.chip,
                                    type === bloodType && styles.selectedChip,
                                ]}
                                textStyle={
                                    type === bloodType &&
                                    styles.selectedChipText
                                }
                            >
                                {type}
                            </Chip>
                        ))}
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 16,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontWeight: "500",
        marginBottom: 8,
    },
    chipContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    chip: {
        backgroundColor: "#f5f5f5",
    },
    selectedChip: {
        backgroundColor: "#E53935",
    },
    selectedChipText: {
        color: "#fff",
    },
});
