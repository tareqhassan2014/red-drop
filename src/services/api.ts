import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Donor } from "../data/donors";

interface User {
    id: number;
    name: string;
    bloodType: string;
    location: string;
    email: string;
    phone: string;
    lastDonation: string;
    totalDonations: number;
    nextDonationDate: string;
    avatar: string;
}

interface DonationHistory {
    id: number;
    date: string;
    hospital: string;
    location: string;
    recipient: string;
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "YOUR_API_BASE_URL" }),
    tagTypes: ["User", "Donors", "Donations"],
    endpoints: (builder) => ({
        getProfile: builder.query<User, void>({
            query: () => "profile",
            providesTags: ["User"],
        }),
        getDonationHistory: builder.query<DonationHistory[], void>({
            query: () => "donations",
            providesTags: ["Donations"],
        }),
        getDonors: builder.query<Donor[], void>({
            query: () => "donors",
            providesTags: ["Donors"],
        }),
        updateProfile: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: "profile",
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        requestBlood: builder.mutation<
            void,
            {
                bloodType: string;
                units: number;
                hospital: string;
                location: string;
                dateTime: string;
                note?: string;
            }
        >({
            query: (body) => ({
                url: "requests",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useGetProfileQuery,
    useGetDonationHistoryQuery,
    useGetDonorsQuery,
    useUpdateProfileMutation,
    useRequestBloodMutation,
} = api;
