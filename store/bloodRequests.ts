import { api } from "./api";

export interface BloodRequest {
    id: string;
    bloodType: string;
    quantity: number;
    location: string;
    contactNumber: string;
    patientInfo: string;
}

export const bloodRequestsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBloodRequests: builder.query<BloodRequest[], void>({
            query: () => "blood-requests",
        }),
        createBloodRequest: builder.mutation<
            BloodRequest,
            Partial<BloodRequest>
        >({
            query: (body) => ({
                url: "blood-requests",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useGetBloodRequestsQuery, useCreateBloodRequestMutation } =
    bloodRequestsApi;
