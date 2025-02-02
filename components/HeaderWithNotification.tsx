import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

interface HeaderProps {
    title: string;
}

export default function HeaderWithNotification({ title }: HeaderProps) {
    const router = useRouter();

    return (
        <View style={styles.header}>
            <Text variant="headlineMedium" style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity
                onPress={() => router.push("/(tabs)/notifications")}
            >
                <MaterialCommunityIcons
                    name="bell-outline"
                    size={24}
                    color="#000"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
});
