import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { theme } from "../src/constants/theme";
import { store } from "../src/store/store";

export default function RootLayout() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="notifications"
                        options={{
                            presentation: "modal",
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="(settings)/privacy"
                        options={{
                            presentation: "modal",
                            headerShown: false,
                        }}
                    />
                </Stack>
            </PaperProvider>
        </Provider>
    );
}
