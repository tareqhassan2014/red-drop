import { navigateToNotifications } from "@/utils/navigation";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface NotificationBellProps {
    color?: string;
}

export function NotificationBell({ color = "#000" }: NotificationBellProps) {
    return (
        <TouchableOpacity onPress={navigateToNotifications}>
            <Ionicons name="notifications-outline" size={24} color={color} />
        </TouchableOpacity>
    );
}
