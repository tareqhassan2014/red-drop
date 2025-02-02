import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { theme } from "../src/constants/theme";

export default function RootLayout() {
    return (
        <PaperProvider theme={theme}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </PaperProvider>
    );
}
