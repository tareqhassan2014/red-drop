import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function TabLayout() {
    const theme = useTheme();

    return (
        <ProtectedRoute>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                        backgroundColor: "#fff",
                        borderTopWidth: 1,
                        borderTopColor: "#f0f0f0",
                        paddingBottom: 8,
                    },
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: "#757575",
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: "500",
                    },
                    tabBarShowLabel: true,
                }}
            >
                <Tabs.Screen
                    name="donor"
                    options={{
                        title: "Donor",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="water-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="events"
                    options={{
                        title: "Events",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="calendar-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="request"
                    options={{
                        title: "Request",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="clipboard-text-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color }) => (
                            <View
                                style={{
                                    backgroundColor: theme.colors.primary,
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: 20,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="home"
                                    size={24}
                                    color="#fff"
                                />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="donate"
                    options={{
                        title: "Donate",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="hand-heart-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </ProtectedRoute>
    );
}
