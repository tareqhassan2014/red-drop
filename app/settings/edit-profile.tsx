import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import {
    Avatar,
    Button,
    Card,
    HelperText,
    TextInput,
} from "react-native-paper";
import * as yup from "yup";

import HeaderWithNotification from "@/components/HeaderWithNotification";
import { updateProfile } from "../../src/features/data/dataSlice";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    location: yup.string().required("Location is required"),
    avatar: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

export default function EditProfileScreen() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const profile = useAppSelector((state) => state.data.profile);

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
            location: profile.location,
            avatar: profile.avatar,
        },
    });

    const handleChangePhoto = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            alert(
                "Sorry, we need camera roll permissions to change your photo!"
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setValue("avatar", result.assets[0].uri);
        }
    };

    const onSubmit = (data: FormData) => {
        dispatch(updateProfile(data));
        router.back();
    };

    return (
        <ScrollView style={styles.container}>
            <HeaderWithNotification title="Edit Profile" />

            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.avatarContainer}>
                        <Controller
                            control={control}
                            name="avatar"
                            render={({ field: { value } }) => (
                                <Avatar.Image
                                    size={100}
                                    source={{ uri: value }}
                                />
                            )}
                        />
                        <Button mode="text" onPress={handleChangePhoto}>
                            Change Photo
                        </Button>
                    </View>

                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label="Full Name"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                error={!!errors.name}
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.name && (
                        <HelperText type="error">
                            {errors.name.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label="Email"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                error={!!errors.email}
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.email && (
                        <HelperText type="error">
                            {errors.email.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label="Phone Number"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                keyboardType="phone-pad"
                                error={!!errors.phone}
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.phone && (
                        <HelperText type="error">
                            {errors.phone.message}
                        </HelperText>
                    )}

                    <Controller
                        control={control}
                        name="location"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label="Location"
                                value={value}
                                onChangeText={onChange}
                                mode="outlined"
                                error={!!errors.location}
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.location && (
                        <HelperText type="error">
                            {errors.location.message}
                        </HelperText>
                    )}

                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={handleSubmit(onSubmit)}
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
