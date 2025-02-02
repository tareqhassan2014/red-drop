import { createSlice } from "@reduxjs/toolkit";
import { bloodGroupsList, donors } from "../../data/donors";

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

interface DataState {
    profile: User;
    donations: DonationHistory[];
    donors: typeof donors;
    bloodGroups: typeof bloodGroupsList;
}

const initialState: DataState = {
    profile: {
        id: 1,
        name: "Hasibur Rahman",
        bloodType: "A+",
        location: "Mirpur 10, Dhaka",
        email: "hasib@example.com",
        phone: "+880 1234-567890",
        lastDonation: "2024-01-15",
        totalDonations: 15,
        nextDonationDate: "2024-04-15",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    donations: [
        {
            id: 1,
            date: "2024-01-15",
            hospital: "Square Hospital",
            location: "Panthapath, Dhaka",
            recipient: "John Doe",
        },
        {
            id: 2,
            date: "2023-10-10",
            hospital: "United Hospital",
            location: "Gulshan, Dhaka",
            recipient: "Jane Smith",
        },
        {
            id: 3,
            date: "2023-07-05",
            hospital: "Apollo Hospital",
            location: "Bashundhara, Dhaka",
            recipient: "Mike Johnson",
        },
    ],
    donors,
    bloodGroups: bloodGroupsList,
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },
        addDonation: (state, action) => {
            state.donations.unshift(action.payload);
            state.profile.totalDonations += 1;
        },
    },
});

export const { updateProfile, addDonation } = dataSlice.actions;
export default dataSlice.reducer;

// Selectors
export const selectProfile = (state: { data: DataState }) => state.data.profile;
export const selectDonations = (state: { data: DataState }) =>
    state.data.donations;
export const selectDonors = (state: { data: DataState }) => state.data.donors;
export const selectBloodGroups = (state: { data: DataState }) =>
    state.data.bloodGroups;
