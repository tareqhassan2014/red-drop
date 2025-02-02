import { createSlice } from "@reduxjs/toolkit";
import { router } from "expo-router";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            // Set fake token
            state.token = "fake-auth-token";
            state.isAuthenticated = true;
            // Navigate to home
            router.replace("/(tabs)/home");
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            // Navigate to login screen
            router.replace("/auth/login");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
    state.auth.isAuthenticated;
