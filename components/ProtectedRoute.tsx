import { Redirect } from "expo-router";
import React from "react";
import { selectIsAuthenticated } from "../src/features/auth/authSlice";
import { useAppSelector } from "../src/store/hooks";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return <Redirect href="/auth/login" />;
    }

    return <>{children}</>;
}
