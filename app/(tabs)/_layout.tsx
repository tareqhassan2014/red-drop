import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#E11D48",
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        backgroundColor: "transparent",
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    android: {
                        backgroundColor:
                            Colors[colorScheme ?? "light"].background,
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Donor",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="water-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    title: "Events",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="calendar-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: "",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="home"
                            size={32}
                            color="#E11D48"
                            style={{
                                backgroundColor: "white",
                                borderRadius: 30,
                                padding: 15,
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
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="donate"
                options={{
                    title: "Donate",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="heart-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
