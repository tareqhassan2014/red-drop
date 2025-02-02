import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
    Avatar,
    Button,
    Card,
    HelperText,
    TextInput,
} from "react-native-paper";
import HeaderWithNotification from "../../components/HeaderWithNotification";
import { updateProfile } from "../../src/features/data/dataSlice";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";

export default function EditProfileScreen() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const profile = useAppSelector((state) => state.data.profile);

    const [formData, setFormData] = useState({
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.location.trim()) {
            newErrors.location = "Location is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            dispatch(updateProfile(formData));
            router.back();
        }
    };

    return (
        <ScrollView style={styles.container}>
            <HeaderWithNotification title="Edit Profile" />

            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.avatarContainer}>
                        <Avatar.Image
                            size={100}
                            source={{ uri: profile.avatar }}
                        />
                        <Button
                            mode="text"
                            onPress={() => {
                                /* TODO: Implement image upload */
                            }}
                        >
                            Change Photo
                        </Button>
                    </View>

                    <TextInput
                        label="Full Name"
                        value={formData.name}
                        onChangeText={(text) =>
                            setFormData((prev) => ({ ...prev, name: text }))
                        }
                        mode="outlined"
                        error={!!errors.name}
                        style={styles.input}
                    />
                    {errors.name && (
                        <HelperText type="error">{errors.name}</HelperText>
                    )}

                    <TextInput
                        label="Email"
                        value={formData.email}
                        onChangeText={(text) =>
                            setFormData((prev) => ({ ...prev, email: text }))
                        }
                        mode="outlined"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        error={!!errors.email}
                        style={styles.input}
                    />
                    {errors.email && (
                        <HelperText type="error">{errors.email}</HelperText>
                    )}

                    <TextInput
                        label="Phone Number"
                        value={formData.phone}
                        onChangeText={(text) =>
                            setFormData((prev) => ({ ...prev, phone: text }))
                        }
                        mode="outlined"
                        keyboardType="phone-pad"
                        error={!!errors.phone}
                        style={styles.input}
                    />
                    {errors.phone && (
                        <HelperText type="error">{errors.phone}</HelperText>
                    )}

                    <TextInput
                        label="Location"
                        value={formData.location}
                        onChangeText={(text) =>
                            setFormData((prev) => ({ ...prev, location: text }))
                        }
                        mode="outlined"
                        error={!!errors.location}
                        style={styles.input}
                    />
                    {errors.location && (
                        <HelperText type="error">{errors.location}</HelperText>
                    )}

                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={handleSave}
                            style={styles.saveButton}
                        >
                            Save Changes
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={() => router.back()}
                            style={styles.cancelButton}
                        >
                            Cancel
                        </Button>
                    </View>
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
    card: {
        margin: 20,
    },
    avatarContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    input: {
        marginBottom: 8,
    },
    buttonContainer: {
        marginTop: 20,
        gap: 12,
    },
    saveButton: {
        paddingVertical: 6,
    },
    cancelButton: {
        paddingVertical: 6,
    },
});
