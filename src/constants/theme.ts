import { DefaultTheme } from "react-native-paper";

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#E53935", // Main red color for RedHope
        secondary: "#FF5252",
        background: "#FFFFFF",
        surface: "#FFFFFF",
        error: "#B00020",
        text: "#000000",
        onSurface: "#000000",
        disabled: "#BDBDBD",
        placeholder: "#9E9E9E",
        backdrop: "rgba(0, 0, 0, 0.5)",
    },
    roundness: 8,
};

export type AppTheme = typeof theme;
