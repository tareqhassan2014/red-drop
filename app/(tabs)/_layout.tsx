import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet } from "react-native";

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
                tabBarStyle: {
                    ...Platform.select({
                        ios: {
                            backgroundColor: "white",
                            borderTopWidth: 0,
                            elevation: 0,
                            height: 90,
                            paddingBottom: 20,
                            paddingTop: 10,
                        },
                        android: {
                            backgroundColor:
                                Colors[colorScheme ?? "light"].background,
                            borderTopWidth: 0,
                            elevation: 0,
                            height: 90,
                            paddingBottom: 20,
                            paddingTop: 10,
                        },
                    }),
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Donor",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "water" : "water-outline"}
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
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "calendar" : "calendar-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={28}
                            color="white"
                            style={styles.centerIcon}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="donate"
                options={{
                    title: "Donate",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "heart" : "heart-outline"}
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
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    centerIcon: {
        backgroundColor: "#E11D48",
        borderRadius: 30,
        padding: 15,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
