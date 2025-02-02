import { MaterialCommunityIcons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import {
    Button,
    Card,
    Chip,
    HelperText,
    SegmentedButtons,
    Text,
    TextInput,
} from "react-native-paper";
import * as yup from "yup";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const schema = yup.object({
    requestType: yup.string().required(),
    bloodType: yup.string().required("Blood type is required"),
    units: yup.string().required("Units are required"),
    hospital: yup.string().required("Hospital name is required"),
    location: yup.string().required("Location is required"),
    dateTime: yup.date().required("Date and time are required"),
    note: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

export default function RequestScreen() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            requestType: "emergency",
            dateTime: new Date(),
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        // TODO: Handle form submission
    };

    const formatDateTime = (date: Date) => {
        return `${date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })} ${date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        })}`;
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text variant="headlineMedium" style={styles.title}>
                    Request Blood
                </Text>
                <MaterialCommunityIcons name="bell" size={24} color="#000" />
            </View>

            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        Request Type
                    </Text>
                    <Controller
                        control={control}
                        name="requestType"
                        render={({ field: { value, onChange } }) => (
                            <SegmentedButtons
                                value={value}
                                onValueChange={onChange}
                                buttons={[
                                    {
                                        value: "emergency",
                                        label: "Emergency",
                                        icon: "alarm-light",
                                    },
                                    {
                                        value: "general",
                                        label: "General",
                                        icon: "calendar-clock",
                                    },
                                ]}
                                style={styles.segmentedButton}
                            />
                        )}
                    />

                    <Text
                        variant="titleMedium"
                        style={[styles.sectionTitle, styles.topSpacing]}
                    >
                        Blood Group
                    </Text>
                    <Controller
                        control={control}
                        name="bloodType"
                        render={({ field: { value, onChange } }) => (
                            <View style={styles.bloodGroupsContainer}>
                                {bloodGroups.map((group) => (
                                    <Chip
                                        key={group}
                                        selected={value === group}
                                        onPress={() => onChange(group)}
                                        style={styles.bloodGroupChip}
                                        showSelectedOverlay
                                    >
                                        {group}
                                    </Chip>
                                ))}
                            </View>
                        )}
                    />
                    {errors.bloodType && (
                        <HelperText type="error">
                            {errors.bloodType.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="units"
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                label="Units Required"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                keyboardType="numeric"
                                style={styles.input}
                                error={!!errors.units}
                            />
                        )}
                    />
                    {errors.units && (
                        <HelperText type="error">
                            {errors.units.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="hospital"
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                label="Hospital Name"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                style={styles.input}
                                error={!!errors.hospital}
                            />
                        )}
                    />
                    {errors.hospital && (
                        <HelperText type="error">
                            {errors.hospital.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="location"
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                label="Location"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                right={<TextInput.Icon icon="map-marker" />}
                                style={styles.input}
                                error={!!errors.location}
                            />
                        )}
                    />
                    {errors.location && (
                        <HelperText type="error">
                            {errors.location.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="dateTime"
                        render={({ field: { value, onChange } }) => (
                            <>
                                <TextInput
                                    label="Required Date & Time"
                                    value={formatDateTime(value)}
                                    mode="outlined"
                                    right={
                                        <TextInput.Icon
                                            icon="calendar-clock"
                                            onPress={() =>
                                                setShowDatePicker(true)
                                            }
                                        />
                                    }
                                    style={styles.input}
                                    editable={false}
                                    error={!!errors.dateTime}
                                />
                                {showDatePicker && (
                                    <DateTimePicker
                                        value={value}
                                        mode="date"
                                        display={
                                            Platform.OS === "ios"
                                                ? "spinner"
                                                : "default"
                                        }
                                        onChange={(_, selectedDate) => {
                                            setShowDatePicker(false);
                                            if (selectedDate) {
                                                onChange(selectedDate);
                                                setShowTimePicker(true);
                                            }
                                        }}
                                        minimumDate={new Date()}
                                    />
                                )}
                                {showTimePicker && (
                                    <DateTimePicker
                                        value={value}
                                        mode="time"
                                        display={
                                            Platform.OS === "ios"
                                                ? "spinner"
                                                : "default"
                                        }
                                        onChange={(_, selectedDate) => {
                                            setShowTimePicker(false);
                                            if (selectedDate) {
                                                onChange(selectedDate);
                                            }
                                        }}
                                    />
                                )}
                            </>
                        )}
                    />
                    {errors.dateTime && (
                        <HelperText type="error">
                            {errors.dateTime.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="note"
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                label="Additional Note"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                multiline
                                numberOfLines={3}
                                style={styles.input}
                            />
                        )}
                    />

                    <Button
                        mode="contained"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.submitButton}
                    >
                        Submit Request
                    </Button>
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontWeight: "bold",
    },
    card: {
        margin: 20,
        marginTop: 0,
    },
    sectionTitle: {
        marginBottom: 12,
        fontWeight: "500",
    },
    segmentedButton: {
        marginBottom: 8,
    },
    topSpacing: {
        marginTop: 20,
    },
    bloodGroupsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 16,
    },
    bloodGroupChip: {
        marginRight: 8,
        marginBottom: 8,
    },
    input: {
        marginBottom: 16,
    },
    submitButton: {
        marginTop: 8,
        paddingVertical: 6,
    },
});
